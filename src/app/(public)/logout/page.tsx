"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Add the router for redirect
import { toast } from "@/components/ui/Toast";

export default function Logout() {
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        const signout = async () => {
            setLoading(true);

            try {
                const req = await fetch("http://localhost:4444/login/logout", {
                    method: "GET",
                    credentials: "include", // Include cookies in the request
                });

                if (req.status === 200) {
                    // Redirect after successful logout
                    router.push("/");
                } else {
                    console.error("Failed to log out!");
                    toast.error("Failed to log out!", {
                        closeButton: false,
                        cancel: {
                            label: "Cancel",
                            onClick: () => {
                                router.push("/"); // Redirect to home or any other page
                            },
                        },
                        action: {
                            label: "Retry",
                            onClick: () => {
                                router.refresh(); // Retry logout
                            },
                        },
                    });
                    // alert("Failed to log out!")
                }
            } catch (error) {
                console.error("Logout request failed:", error);
                toast.error("Logout request failed!", {
                    closeButton: false,
                    cancel: {
                        label: "Cancel",
                        onClick: () => {
                            router.push("/"); // Redirect to home or any other page
                        },
                    },
                    action: {
                        label: "Retry",
                        onClick: () => {
                            router.refresh(); // Retry logout
                        },
                    },
                });
                // alert("Logout request failed!")
            } finally {
                setLoading(false);
            }
        };

        signout();
    }, [router]); // Include router in dependencies

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="mb-4 text-2xl font-semibold text-center">Logged out</h2>
            {loading && <h3 className="mb-4 text-xl font-semibold text-center">Redirecting...</h3>}
        </div>
    );
}
