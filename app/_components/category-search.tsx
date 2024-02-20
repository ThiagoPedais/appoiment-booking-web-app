import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategorySearch = () => {
    return (
        <div className="mb-10 flex items-center flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-wide">
                Search <span className="text-primary">Doctors</span>
            </h2>
            <h2 className="capitalize text-muted-foreground text-xl">
                search your doctor and book appoiment in one click
            </h2>

            <div className="mt-3 flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Search..."
                    // className="focus:border-primary"
                />
                <Button type="submit">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                </Button>
            </div>
        </div>
    );
};

export default CategorySearch;
