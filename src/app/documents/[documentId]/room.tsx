'use client'

import { ReactNode } from 'react'
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from '@liveblocks/react/suspense'
import { useParams } from 'next/navigation'

export function Room({ children }: { children: ReactNode }) {
  const params = useParams()

  return (
    <LiveblocksProvider
      publicApiKey={
        'pk_dev_4NbB55HX__NbMgo7hvNR1U11bb_yLy8r3IIBgCL0k3Hr2Xy8k3IOWLzBcM8FwmRu'
      }
    >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}
