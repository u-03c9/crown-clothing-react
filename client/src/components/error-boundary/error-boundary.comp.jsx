import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div>
          <img src="/404.png" alt="" className="h-[30vh] mx-auto mt-20" />
          <h2 className="text-center text-4xl mt-5"> This page is broken</h2>
          <p className="md:max-w-[50vw] mx-auto mt-5">
            A broken clock is right twice a day. But if you just have one clock,
            it's impossible to tell exactly when the clock is right. So it could
            be right at any moment. And that brings you to the crux of the
            conceptualization. What is time? Nothing but an abyss. Clocks are
            just false attempts to harness its power. It's cruel really.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
