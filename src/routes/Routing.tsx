import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPages from "../pages/blogs";
import BlogDetails from "../pages/blog-details";
import MainLayout from "../components/MainLayout/MainLayout";
import Dashboard from "../pages/dashboard";

function Routing() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route
                        path="*"
                        element={<Dashboard />}
                    />
                    <Route
                        path="/overview"
                        element={<Dashboard />}
                    />
                    <Route
                        path="/blogs"
                        element={<BlogPages />}
                    />
                    <Route
                        path="/blogs/:id"
                        element={<BlogDetails />}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routing