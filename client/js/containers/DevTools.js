import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

//loads in redux dev tools so we can see the action
// would normally be excluded on production builds
export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-w">
        <LogMonitor />
    </DockMonitor>
)
