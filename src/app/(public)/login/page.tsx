"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            const req = await fetch("http://localhost:4444/login/login", {
                method: "POST",
                body: formData,
                credentials: "include"
            });

            if (!req.ok) {
                throw new Error(`HTTP error! status: ${req.status}`);
            }

            const res = await req.json();

            if (res?.message) {
                setErrorMessage(res.message);
            }

            if (res?.users_id && res?.admin === true) {
                router.push("/dashboard");
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log("An unexpected error occurred.");
            }
            setErrorMessage("Login request failed. | Contact an administrator.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>

            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                <Label name="email" label="Email" input={{ type: "email", required: true }} className="flex flex-col gap-4 justify-start items-start mb-5" />

                <Label name="password" label="Password" input={{ type: "password", required: true }} className="flex flex-col gap-4 justify-start items-start mb-5" />

                {errorMessage && (
                    <Alert variant="error">
                        <AlertTitle>Login Error</AlertTitle>
                        <AlertDescription>
                            {errorMessage}
                        </AlertDescription>
                    </Alert>
                )}
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 rounded-md"
                >
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </form>
        </div>
    );
}
