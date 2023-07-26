import { ApiService } from '@services'
import { ReactNode } from 'react'
import { create } from 'zustand'

import { createSelectors } from './helpers'
import mockedTasks from './mocks/tasks'

export interface CarouselSlide {
  title?: string
  subhead?: string
  text?: string
  contentPosition?: 'top' | 'center' | 'bottom'
  content?: ReactNode
  background?: string
  mainButton: MainButtonSlide
}

export interface MainButtonSlide {
  text: string
  action?: 'next' | 'follow'
}

export interface TaskStory {
  background?: string
  slides?: CarouselSlide[]
}

export interface Task extends TaskStory {
  iconStroke?: string
  iconFill?: string
  id?: number
  slug?: string
  title: string
  subTitle?: string
  iconName: string
  locked?: boolean
  completed?: boolean
}

interface TaskState {
  currentTask: null | Task
  tasks: Task[]
}

interface TaskAction {
  actions: {
    // setCurrentTask: (task: Task) => void
    fetchTasks: (challengeId: number) => void
    completeTask: (
      challengeId: number,
      taskId: number,
      taskSlug: string
    ) => void
    // fetchTasks: ({
    //   userId,
    //   challengeId,
    // }: {
    //   userId: string
    //   challengeId: string
    // }) => void
  }
}

const useTaskStoreBase = create<TaskState & TaskAction>((set, get) => ({
  currentTask: null,
  // tasks: [...(tasks as any)],
  tasks: [],
  actions: {
    // setCurrentTask: (currentTask: Task) => set((state) => ({ currentTask })),
    // fetchCurrentTask: async (id: string) => {
    //   set((state) => ({ currentTask: state.tasks[0] }))
    // },
    fetchTasks: async (challengeId: number) => {
      const { data: beTasks } = await ApiService.get({
        endpoint: `/task/${challengeId}`,
      })

      const { data: completedTasks } = await ApiService.get({
        endpoint: `/task/${challengeId}/user`,
      })

      const mergedTasks = [...(mockedTasks as any)]
        .map((mt, i) => {
          const beTask = (beTasks as any).find(
            (bet: any) => mt.slug === bet.slug
          )
          const completedTask = completedTasks.find(
            (ct: any) => beTask.id === ct.taskId
          )
          mt.id = beTask.id

          if (completedTask) {
            mt.completed = true
          } else if (i !== 0) {
            mt.locked = true
          }

          return mt
        })
        .map((t, i) => {
          const nextTask = mockedTasks[i + 1] as any

          if (t.completed && nextTask?.locked) {
            nextTask.locked = false
          }

          return t
        }) as Task[]

      set(() => ({ tasks: mergedTasks }))
    },
    completeTask: async (
      challengeId: number,
      taskId: number,
      taskSlug: string
    ) => {
      if (window.plausible) {
        window.plausible('task-completed', { props: { name: taskSlug } })
      }

      const { ok } = await ApiService.post({
        endpoint: `/task/${challengeId}/user/${taskId}`,
      })

      if (!ok) {
        return
      }

      set((state) => {
        const tasks = state.tasks.map((t) => {
          if (t.id === taskId) {
            t.completed = true
          }

          return t
        })

        return { tasks }
      })
    },
  },
}))

export const useTaskActions = () => useTaskStoreBase((state) => state.actions)

export const useTask = createSelectors(useTaskStoreBase)
