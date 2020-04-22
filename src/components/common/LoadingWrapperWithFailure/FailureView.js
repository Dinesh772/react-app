import React from 'react'

import {
  FailureViewContainer,
  FailureViewMessage,
  RetryButton,
} from './styledComponents'

class FailureView extends React.Component {
  render() {
    const { onRetryClick, errorMessage } = this.props

    return (
      <FailureViewContainer>
        <FailureViewMessage>{errorMessage}</FailureViewMessage>
        <RetryButton onClick={onRetryClick}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }
}

export default FailureView
