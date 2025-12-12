module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/scalable-web-app/lib/auth.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createToken",
    ()=>createToken,
    "getAuthToken",
    ()=>getAuthToken,
    "getCurrentUser",
    ()=>getCurrentUser,
    "removeAuthCookie",
    ()=>removeAuthCookie,
    "requireAuth",
    ()=>requireAuth,
    "setAuthCookie",
    ()=>setAuthCookie,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scalable-web-app/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwt/sign.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scalable-web-app/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwt/verify.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scalable-web-app/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/headers.js [middleware] (ecmascript)");
;
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");
const TOKEN_NAME = "auth-token";
async function createToken(payload) {
    const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("7d").sign(JWT_SECRET);
    return token;
}
async function verifyToken(token) {
    try {
        const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["jwtVerify"])(token, JWT_SECRET);
        return verified.payload;
    } catch (error) {
        return null;
    }
}
async function setAuthCookie(token) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(TOKEN_NAME, token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}
async function getAuthToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(TOKEN_NAME);
    return token?.value || null;
}
async function removeAuthCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(TOKEN_NAME);
}
async function getCurrentUser() {
    const token = await getAuthToken();
    if (!token) return null;
    return await verifyToken(token);
}
async function requireAuth() {
    const user = await getCurrentUser();
    if (!user) {
        throw new Error("Unauthorized");
    }
    return user;
}
}),
"[project]/Downloads/scalable-web-app/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scalable-web-app/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$lib$2f$auth$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scalable-web-app/lib/auth.ts [middleware] (ecmascript)");
;
;
async function proxy(request) {
    const { pathname } = request.nextUrl;
    // Protected routes that require authentication
    const protectedRoutes = [
        "/dashboard"
    ];
    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));
    if (isProtectedRoute) {
        const token = request.cookies.get("auth-token")?.value;
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", request.url));
        }
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$lib$2f$auth$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifyToken"])(token);
        if (!payload) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", request.url));
        }
    }
    // Redirect to dashboard if already authenticated
    const authRoutes = [
        "/login",
        "/signup"
    ];
    const isAuthRoute = authRoutes.includes(pathname);
    if (isAuthRoute) {
        const token = request.cookies.get("auth-token")?.value;
        if (token) {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$lib$2f$auth$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifyToken"])(token);
            if (payload) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", request.url));
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scalable$2d$web$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/signup"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dcbbf952._.js.map