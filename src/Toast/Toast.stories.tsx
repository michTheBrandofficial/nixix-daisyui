import { store } from 'nixix/primitives'
import Toast, { ToastProps } from '.'
import Alert from '../Alert'
import Button from '../Button'
import { For } from 'nixix/hoc'

const horizontalMapping = {
  start: 'left',
  end: 'right',
  center: 'center',
} as const

export const Default = ({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}: ToastProps): someView => {
  return (
    <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <div className="w-full h-full">
        <Toast {...args} vertical={vertical} horizontal={horizontal}>
          Default toast
        </Toast>
      </div>
    </>
  )
}

export const WithAlert = ({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}: ToastProps) => {
  return (
    <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <Toast {...args} vertical={vertical} horizontal={horizontal}>
        <Alert status="info">New message arrived.</Alert>
      </Toast>
    </>
  )
}

export const WithMultipleAlerts = ({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}: ToastProps) => {
  return (
    <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <Toast {...args} vertical={vertical} horizontal={horizontal}>
        <Alert status="info">New message arrived.</Alert>
        <Alert status="success">Message sent successfully.</Alert>
      </Toast>
    </>
  )
}

const dynamicToastChildStatuses = [
  'info',
  'success',
  'warning',
  'error',
] as const

type DynamicToastChild = {
  text: string
  status: typeof dynamicToastChildStatuses[number]
}

export const DynamicAlerts = () => {
  const [alerts, setAlerts] = store<DynamicToastChild[]>([
    { text: 'This is a custom alert!', status: 'info' },
  ])

  const handleAddToast = () => {
    setAlerts((alerts) => [
      ...alerts,
      {
        text: 'New message arrived.',
        status:
          dynamicToastChildStatuses[
            Math.floor(Math.random() * dynamicToastChildStatuses.length)
          ],
      },
    ])
  }

  const handleRemoveToast = (index: number) => {
    setAlerts((alerts) => alerts.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Button tag='button' on:click={handleAddToast}>Add Toast</Button>
      <Toast>
        <For each={alerts} >
        {((alert, i) => (
          <Alert status={alert.status}>
            <div className="w-full flex-row justify-between gap-2">
              <h3>{alert.text}</h3>
            </div>
            <Button tag='button' color="ghost" on:click={() => handleRemoveToast(i)}>
              X
            </Button>
          </Alert>
        ))}
        </For>
      </Toast>
    </div>
  )
}
