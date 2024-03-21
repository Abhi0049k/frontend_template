import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "@/components/Loading";

const PageNotFound = lazy(() => import("./PageNotFound"));
const Auth = lazy(() => import("./Auth"))

const Router: FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Suspense fallback={<Loading />}><Auth action="login" /></Suspense>} />
            <Route path="/register" element={<Suspense fallback={<Loading />}><Auth action="register" /> </Suspense>} />
            <Route path="/*" element={<Suspense fallback={<Loading />}><PageNotFound /></Suspense>} />
        </Routes>
    )
}

export default Router