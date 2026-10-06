"use client";
import { useEffect, useState } from "react";
import { formatDuration } from "@/lib/dates";
export function ExperienceDuration({ short = false }: { short?: boolean }) { const [value, setValue] = useState(""); useEffect(() => setValue(formatDuration("2024-07-01")), []); return <>{value || (short ? "professional experience" : "professional technology experience")}</>; }
