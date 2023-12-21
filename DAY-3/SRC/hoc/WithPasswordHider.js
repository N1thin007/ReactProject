import React from 'react';

const withPasswordHider = (WrappedComponent, delay) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showPassword: true,
      };
    }

    componentDidMount() {
      this.timer = setTimeout(() => {
        this.setState({ showPassword: false });
      }, delay);
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          showPassword={this.state.showPassword}
        />
      );
    }
  };
};

export default withPasswordHider;
