import { Button } from "@/components/ui/button";

const state = true;

export default function Home() {
    return (
        <div>
            <p className="text-3xl font-bold text-indigo-500">
                Hello, I'm Mutiny
            </p>
            <Button>Click Me!</Button>
        </div>
    );
}
