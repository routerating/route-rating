import { Component } from 'react'

export type PageProps = {
  setLoading: (loading: boolean) => Promise<void>
}

class Page<Props, State> extends Component<Props & PageProps, State> {
  constructor(props: Props & PageProps) {
    super(props)

    this.props.setLoading(true)
  }

  isLoading = async () => {
    this.props.setLoading(true)
  }

  doneLoading = async () => {
    this.props.setLoading(false)
  }
}

export default Page
