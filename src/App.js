import { FaroRoutes } from "@grafana/faro-react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { FaroErrorBoundary } from "@grafana/faro-react";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // return (
  //   <FaroRoutes>
  //     <Route path="/" element={<Home />} />
  //   </FaroRoutes>
  // );

  // const pushErrorOptions = {
  //   type: "Custom Error Type",
  //   context: {
  //     foo: "bar",
  //     baz: "abc",
  //   },
  // };

  return (
    <FaroErrorBoundary
    // beforeCapture={(error) => handleBeforeCapture(error)}
    // onError={(error) => handleError(error)}
    // onMount={() => handleOnMount()}
    // onUnmount={(error) => handleUnmount(error)}
    // onReset={(error) => handleReset(error)}
    // pushErrorOptions={pushErrorOptions}
    // fallback={(error, resetBoundary) => {
    //   return errorBoundaryFallbackRenderer(error, resetBoundary);
    // }}
    >
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </FaroErrorBoundary>
  );
}

export default App;
