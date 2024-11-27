import React, { Suspense, createContext, lazy, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import InfiniteScrollB from "./components/InfiniteScrollB";
// import Comments from "./components/Comments";

const Comments = lazy(() => import("./components/Comments"));
const LiveChat = lazy(() => import("./components/LiveChat"));
const Search = lazy(() => import("./components/Search"));

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(1);

  return (
    <Suspense>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <div className={`app-container ${!theme && "bg-darker"} min-h-[100vh]`}>
          <Header />
          <div className="px-8">
            <Outlet />
          </div>
        </div>
      </ThemeContext.Provider>
    </Suspense>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InfiniteScrollB />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/live",
        element: <LiveChat />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const AppProvider = () => <RouterProvider router={appRouter} />;

export default AppProvider;
