"use client";
import { delay } from "@/lib/utils";
import { toast, Toaster } from "./ui/Toast";

export default function ToastUsageExample() {
    return (
        <div>
            {/* Just need to be placed anywhere in the project example a good place whould be in the layout */}
            <button type="button" onClick={async () => {
                toast.success("Test");
                await delay(1000);
                toast.info("Test");
                await delay(1000);
                toast.warning("Test");
                await delay(1000);
                toast.error("Test");
            }}>
                Give me some toasts
            </button>
        </div>
    )
}
