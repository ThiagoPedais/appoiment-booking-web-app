import CategoryList from "./search/_components/category-list";

const LayoutRoute = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid grid-cols-4">
            <div className="hidden md:block">
                <CategoryList />
            </div>
            <div className="col-span-4 md:col-span-3">{children}</div>
        </div>
    );
};

export default LayoutRoute;
