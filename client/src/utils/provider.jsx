"use client";

import {useState} from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function Provider({ children }) {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default Provider;