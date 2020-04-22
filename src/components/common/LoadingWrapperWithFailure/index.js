import React from 'react'

import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'

import LoadingView from './LoadingView'
import FailureView from './FailureView'

class  LoadingWrapperWithFailure extends React.Component {
  render() {
    console.log('loading')
    const {
      apiStatus,
      renderSuccessUI: RenderSuccessUI,
      onRetryClick,
      apiError,
    } = this.props
    console.log(apiStatus)
    const errorMessage = getUserDisplayableErrorMessage(apiError)
    switch (apiStatus) {
      case API_FETCHING:
        return <LoadingView />
      case API_SUCCESS:
        return <RenderSuccessUI />
      case API_FAILED:
        return (
          <FailureView
            onRetryClick={onRetryClick}
            errorMessage={errorMessage}
          />
        )
      default:
        return null
    }
  }
}

export default LoadingWrapperWithFailure
