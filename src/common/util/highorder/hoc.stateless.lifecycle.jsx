import React from 'react'

export const LifeCycleProvider = (Component, lifeCycleHooks) =>
    class extends React.PureComponent {
        constructor(props) {
            super(props)
            Object.keys(lifeCycleHooks).forEach(functionName => {
                this[functionName] = lifeCycleHooks[functionName]
            })
            if (lifeCycleHooks._constructor) {
                lifeCycleHooks._constructor(props)
            }
        }
        render() {
            return Component({ ...this.props })
        }
    }
