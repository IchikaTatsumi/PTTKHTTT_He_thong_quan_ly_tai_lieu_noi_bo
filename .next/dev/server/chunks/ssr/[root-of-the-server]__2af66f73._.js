module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/use-mobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/button.tsx (based on ui/button.jsx)
__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/input.tsx (based on ui/input.jsx)
__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator-root",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-accent animate-pulse rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-ssr] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$use$2d$mobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/use-mobile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
function useSidebar() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$use$2d$mobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? _open;
    const setOpen = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((value)=>{
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar
        }), [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-slot": "sidebar-wrapper",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className),
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }) {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "sidebar",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className),
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "Sidebar"
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                children: "Displays the mobile sidebar."
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group peer text-sidebar-foreground hidden md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        "data-slot": "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-slot": "sidebar-gap",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-slot": "sidebar-container",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sidebar": "sidebar",
                    "data-slot": "sidebar-inner",
                    className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
function SidebarTrigger({ className, onClick, ...props }) {
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("size-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {}, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
function SidebarRail({ className, ...props }) {
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-sidebar": "rail",
        "data-slot": "sidebar-rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
function SidebarInset({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-slot": "sidebar-inset",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
function SidebarInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        "data-slot": "sidebar-input",
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background h-8 w-full shadow-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
function SidebarHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-header",
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
function SidebarFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-footer",
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
function SidebarSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "sidebar-separator",
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-sidebar-border mx-2 w-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, this);
}
function SidebarContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-content",
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
function SidebarGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-group",
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-group-label",
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-group-action",
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
function SidebarGroupContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-group-content",
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
function SidebarMenu({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "data-slot": "sidebar-menu",
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
function SidebarMenuItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "sidebar-menu-item",
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 467,
        columnNumber: 5
    }, this);
}
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 515,
        columnNumber: 5
    }, this);
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile,
                ...tooltip
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 536,
        columnNumber: 5
    }, this);
}
function SidebarMenuAction({ className, asChild = false, showOnHover = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-menu-action",
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 560,
        columnNumber: 5
    }, this);
}
function SidebarMenuBadge({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-menu-badge",
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 585,
        columnNumber: 5
    }, this);
}
function SidebarMenuSkeleton({ className, showIcon = false, ...props }) {
    // Random width between 50 to 90%.
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-menu-skeleton",
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 622,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 max-w-(--skeleton-width) flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 615,
        columnNumber: 5
    }, this);
}
function SidebarMenuSub({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "data-slot": "sidebar-menu-sub",
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 642,
        columnNumber: 5
    }, this);
}
function SidebarMenuSubItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "sidebar-menu-sub-item",
        "data-sidebar": "menu-sub-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/menu-sub-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 660,
        columnNumber: 5
    }, this);
}
function SidebarMenuSubButton({ asChild = false, size = "md", isActive = false, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-menu-sub-button",
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx",
        lineNumber: 683,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/dropdown-menu.tsx
__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-inset:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex size-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/dialog.tsx (Đã Sửa)
__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        // Đã sửa để chỉ truyền className và props
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        // Đã sửa để chỉ truyền className và props
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/label.tsx (based on ui/label.jsx)
__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/label.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/PermissionsDialog.tsx
__turbopack_context__.s([
    "PermissionsDialog",
    ()=>PermissionsDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Giả định vai trò người dùng hiện tại là 'admin' để minh họa logic
const FAKE_CURRENT_USER_ROLE = "admin";
function PermissionsDialog({ open, onOpenChange, document, currentUserRole = FAKE_CURRENT_USER_ROLE }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            name: "Nguyễn Văn A",
            email: "nguyenvana@company.com",
            role: "owner",
            department: "Công nghệ"
        },
        {
            id: "admin-404",
            name: "Trần Văn Quản Trị",
            email: "admin@company.com",
            role: "admin",
            department: "Quản lý"
        },
        {
            id: "manager-500",
            name: "Lý Văn Quản Lý",
            email: "manager@company.com",
            role: "manager",
            department: "Điều hành"
        },
        {
            id: "2",
            name: "Trần Thị B",
            email: "tranthib@company.com",
            role: "viewer",
            department: "Marketing"
        },
        {
            id: "3",
            name: "Lê Văn C",
            email: "levanc@company.com",
            role: "viewer",
            department: "Nhân sự"
        }
    ]);
    const availableUsers = [
        {
            id: "4",
            name: "Phạm Thị D",
            email: "phamthid@company.com",
            department: "Tài chính"
        },
        {
            id: "5",
            name: "Hoàng Văn E",
            email: "hoangvane@company.com",
            department: "Pháp lý"
        }
    ];
    const handleRoleChange = (userId, newRole)=>{
        // Chỉ Owner và Admin mới được thăng cấp lên Manager
        const canPromoteDemote = currentUserRole === "owner" || currentUserRole === "admin";
        const currentRole = permissions.find((p)=>p.id === userId)?.role;
        // Logic hạn chế: Manager chỉ có thể phân quyền giữa Viewer (User)
        const isCurrentUserManager = currentUserRole === 'manager';
        const isTargetUserManagerOrHigher = currentRole === 'manager' || currentRole === 'admin' || currentRole === 'owner';
        // Nếu người dùng hiện tại là Manager và đang cố gắng thay đổi quyền của Manager/Admin/Owner, ngăn chặn
        if (isCurrentUserManager && isTargetUserManagerOrHigher) {
            console.warn("Permission denied: Manager không thể thay đổi vai trò của Manager/Admin/Owner.");
            return;
        }
        // Giữ logic thăng cấp/giáng cấp Admin/Owner
        if (newRole === "manager") {
            if (!canPromoteDemote) {
                console.warn("Permission denied: Chỉ Chủ sở hữu hoặc Admin mới có thể thăng cấp.");
                return;
            }
        }
        // Chỉ Owner và Admin mới được giáng cấp Manager (xuống viewer)
        if (currentRole === "manager" && newRole !== "manager") {
            if (!canPromoteDemote) {
                console.warn("Permission denied: Chỉ Chủ sở hữu hoặc Admin mới có thể giáng cấp Manager.");
                return;
            }
        }
        setPermissions(permissions.map((p)=>p.id === userId ? {
                ...p,
                role: newRole
            } : p));
    };
    const handleRemoveUser = (userId)=>{
        const canPromoteDemote = currentUserRole === "owner" || currentUserRole === "admin";
        const targetUser = permissions.find((p)=>p.id === userId);
        // Ngăn Manager bị xóa bởi người dùng cấp thấp hơn
        if (targetUser?.role === "manager" && !canPromoteDemote) {
            console.warn("Permission denied: Chỉ Chủ sở hữu hoặc Admin mới có thể xóa Manager.");
            return;
        }
        // Manager không được xóa Admin/Owner
        if (currentUserRole === 'manager' && (targetUser?.role === 'owner' || targetUser?.role === 'admin')) {
            console.warn("Permission denied: Manager không thể xóa Admin/Owner.");
            return;
        }
        setPermissions(permissions.filter((p)=>p.id !== userId));
    };
    const handleAddUser = (user)=>{
        setPermissions([
            ...permissions,
            {
                ...user,
                role: "viewer"
            }
        ]);
    };
    const getRoleBadge = (role)=>{
        switch(role){
            case "owner":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    children: "Chủ sở hữu"
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 153,
                    columnNumber: 16
                }, this);
            case "admin":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "destructive",
                    children: "Admin"
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 155,
                    columnNumber: 16
                }, this);
            case "manager":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "secondary",
                    className: "bg-yellow-600 hover:bg-yellow-600/80 text-white",
                    children: "Quản lý"
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 157,
                    columnNumber: 16
                }, this);
            case "viewer":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    children: "Người dùng"
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 159,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    children: role
                }, void 0, false, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 161,
                    columnNumber: 16
                }, this);
        }
    };
    // Hàm trợ giúp để xác định văn bản hiển thị trong SelectTrigger
    const getSelectTriggerValue = (role)=>{
        switch(role){
            case "admin":
                return "Admin";
            case "owner":
                return "Chủ sở hữu";
            case "manager":
                return "Manager";
            case "viewer":
                return "Xem";
            default:
                return "";
        }
    };
    const getInitials = (name)=>{
        return name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    };
    const filteredUsers = availableUsers.filter((user)=>!permissions.some((p)=>p.id === user.id) && (user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase())));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[700px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Quản lý quyền truy cập"
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                'Quản lý người dùng có quyền truy cập vào "',
                                document.name,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Thêm người dùng"
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Tìm kiếm theo tên hoặc email...",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            className: "pl-9"
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                searchQuery && filteredUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 max-h-[150px] overflow-y-auto rounded-lg border bg-background",
                                    children: filteredUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-3 hover:bg-accent cursor-pointer",
                                            onClick: ()=>{
                                                handleAddUser(user);
                                                setSearchQuery("");
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "h-8 w-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                children: getInitials(user.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: user.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, user.id, true, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: [
                                        "Người dùng có quyền truy cập (",
                                        permissions.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-h-[300px] overflow-y-auto",
                                    children: permissions.map((user)=>{
                                        const isCurrentUserOwner = currentUserRole === "owner";
                                        const canPromoteDemote = currentUserRole === "owner" || currentUserRole === "admin";
                                        const isCurrentUserManager = currentUserRole === 'manager';
                                        const isOwner = user.role === "owner";
                                        const isAdmin = user.role === "admin";
                                        const isManager = user.role === "manager";
                                        const isUser = user.role === "viewer";
                                        // Target roles
                                        const isTargetTopTier = isOwner || isAdmin;
                                        const isTargetMidTierOrHigher = isTargetTopTier || isManager;
                                        // Visibility Logic
                                        // HIDE controls if target is Admin/Owner (vì quyền của họ không nên bị thay đổi qua UI này)
                                        const shouldHideControls = isTargetTopTier;
                                        // Ẩn dropdown và nút xóa nếu người dùng hiện tại là Manager và đang xem Manager khác
                                        const shouldHideControlsForManager = isCurrentUserManager && isManager;
                                        // Nút xóa:
                                        const canRemoveTargetByAdminOwner = canPromoteDemote && !isOwner;
                                        const canRemoveTargetByManager = isCurrentUserManager && isUser;
                                        const canRemove = isCurrentUserOwner || canRemoveTargetByAdminOwner || canRemoveTargetByManager;
                                        const roleDisplay = getRoleBadge(user.role);
                                        // Hiển thị dropdown/controls nếu target KHÔNG PHẢI Owner/Admin VÀ (target không phải Manager HOẶC current user là Admin/Owner)
                                        const shouldShowDropdownAndControls = !isTargetTopTier && !(isCurrentUserManager && isManager);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between rounded-lg border p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                children: getInitials(user.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: user.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        roleDisplay
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground",
                                                                    children: [
                                                                        user.email,
                                                                        " • ",
                                                                        user.department
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: shouldShowDropdownAndControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                value: user.role,
                                                                onValueChange: (value)=>handleRoleChange(user.id, value),
                                                                // Nếu user là Manager, chỉ Owner/Admin mới được thay đổi vai trò của họ
                                                                disabled: isManager && !canPromoteDemote,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                        className: "w-[120px]",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: getSelectTriggerValue(user.role)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                                lineNumber: 317,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                        children: [
                                                                            isUser && canPromoteDemote || isManager ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "manager",
                                                                                // Vô hiệu hóa nút nếu đang thăng cấp Viewer mà không có quyền
                                                                                disabled: isUser && !canPromoteDemote,
                                                                                children: "Manager"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                                lineNumber: 324,
                                                                                columnNumber: 33
                                                                            }, this) : null,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "viewer",
                                                                                disabled: isManager && !canPromoteDemote,
                                                                                children: "Xem"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                                lineNumber: 334,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                onClick: ()=>handleRemoveUser(user.id),
                                                                disabled: !canRemove,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : // Trường hợp HIDE: Chỉ hiển thị nút xóa/hủy quyền nếu có quyền xóa người dùng cấp cao
                                                    isTargetMidTierOrHigher && canPromoteDemote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleRemoveUser(user.id),
                                                        // Chỉ Owner/Admin mới được xóa Admin/Owner/Manager khác
                                                        disabled: !canRemoveTargetByAdminOwner,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, user.id, true, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>onOpenChange(false),
                            children: "Lưu thay đổi"
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
            lineNumber: 199,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/DocumentsTable.tsx
__turbopack_context__.s([
    "DocumentsTable",
    ()=>DocumentsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$PermissionsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/PermissionsDialog.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function DocumentsTable({ documents, onDelete, onDownload, currentUser, onEditInfo }) {
    const [selectedDoc, setSelectedDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [permissionsOpen, setPermissionsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Logic kiểm tra quyền: Owner, Admin, hoặc Manager có quyền cao
    const checkPermission = (doc, permission)=>{
        // Logic mặc định: Giả định nếu tài liệu hiển thị, người dùng có quyền View (Đọc/Tải xuống)
        if (permission === 'view') {
            return true; // Luôn cho phép Xem/Tải xuống nếu tài liệu có trong danh sách
        }
        const userRole = currentUser.role.toLowerCase();
        const isOwner = doc.uploadedBy === currentUser.name;
        // Admin, Owner, VÀ Manager có quyền cao cho delete/share
        const isManagerOrHigher = userRole === "owner" || userRole === "admin" || userRole === "manager";
        if (isOwner) return true; // Owner có tất cả quyền
        switch(permission){
            case 'delete':
            case 'share':
                // Owner, Admin, VÀ Manager có quyền delete/share
                return isManagerOrHigher;
            default:
                return false;
        }
    };
    const getFileIcon = (type)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-5 w-5 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
            lineNumber: 73,
            columnNumber: 12
        }, this);
    };
    const handlePermissionsClick = (doc)=>{
        setSelectedDoc(doc);
        setPermissionsOpen(true);
    };
    // Kept placeholder function to avoid errors elsewhere, but it's not used now.
    const handleEditInfoClick = (doc)=>{
        onEditInfo(doc);
        console.log("Editing information for document:", doc.name);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "w-[40px]"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Tên tài liệu"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Kích thước"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Người tải lên"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Ngày tải lên"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "w-[80px]"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: documents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    colSpan: 6,
                                    className: "text-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-2 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "h-12 w-12"
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Chưa có tài liệu nào"
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this) : documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: getFileIcon(doc.type)
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: doc.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: doc.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: doc.size
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: doc.uploadedBy
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: doc.uploadedAt
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>onDownload(doc.id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Xem"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 25
                                                            }, this),
                                                            checkPermission(doc, 'share') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handlePermissionsClick(doc),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Phân quyền"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                disabled: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Phân quyền"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 25
                                                            }, this),
                                                            checkPermission(doc, 'delete') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                className: "text-destructive",
                                                                onClick: ()=>onDelete(doc.id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                        lineNumber: 163,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Xóa"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                disabled: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Xóa"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, doc.id, true, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            selectedDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$PermissionsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionsDialog"], {
                open: permissionsOpen,
                onOpenChange: setPermissionsOpen,
                document: selectedDoc,
                currentUserRole: currentUser.role.toLowerCase()
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Content of src/components/UploadDialog.tsx
__turbopack_context__.s([
    "UploadDialog",
    ()=>UploadDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/label.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function UploadDialog({ open, onOpenChange, onUpload }) {
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Đã loại bỏ accessLevel state
    const [documentName, setDocumentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setSelectedFile(file);
            if (!documentName) {
                setDocumentName(file.name.substring(0, file.name.lastIndexOf('.')) || file.name);
            }
        }
    };
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            if (!documentName) {
                setDocumentName(file.name.substring(0, file.name.lastIndexOf('.')) || file.name);
            }
        }
    };
    const handleUpload = ()=>{
        if (selectedFile && documentName) {
            onUpload(selectedFile, {
                // Đã loại bỏ accessLevel từ metadata
                documentName
            });
            // Reset form
            setSelectedFile(null);
            setDocumentName("");
            onOpenChange(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[600px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Tải tài liệu lên"
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Tải tài liệu mới lên hệ thống"
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive ? "border-primary bg-accent" : "border-border"}`,
                            onDragEnter: handleDrag,
                            onDragLeave: handleDrag,
                            onDragOver: handleDrag,
                            onDrop: handleDrop,
                            children: selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between bg-accent p-4 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: "h-8 w-8 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: selectedFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: [
                                                            (selectedFile.size / 1024 / 1024).toFixed(2),
                                                            " MB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>setSelectedFile(null),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "mx-auto h-12 w-12 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "file-upload",
                                                className: "cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary hover:underline",
                                                        children: "Chọn file"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: " hoặc kéo thả vào đây"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "file-upload",
                                                type: "file",
                                                className: "hidden",
                                                accept: "*/*",
                                                onChange: handleFileChange
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Hỗ trợ tất cả định dạng file (.pdf, .doc, .py, .jsx, .tsx, ...) - Tối đa 50MB"
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "document-name",
                                    children: "Tên tài liệu"
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "document-name",
                                    type: "text",
                                    placeholder: "Nhập tên tài liệu...",
                                    value: documentName,
                                    onChange: (e)=>setDocumentName(e.target.value),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleUpload,
                            disabled: !selectedFile || !documentName,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                "Tải lên"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/utils.ts
__turbopack_context__.s([
    "fetchApi",
    ()=>fetchApi,
    "parseDate",
    ()=>parseDate,
    "sizeToNumber",
    ()=>sizeToNumber
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';
/**
 * Chuẩn hóa headers thành Record<string, string>
 */ function normalizeHeaders(headers) {
    if (!headers) return {};
    if (headers instanceof Headers) {
        const result = {};
        headers.forEach((value, key)=>result[key] = value);
        return result;
    }
    if (Array.isArray(headers)) {
        const result = {};
        headers.forEach(([key, value])=>result[key] = value);
        return result;
    }
    return headers; // đã là Record<string, string>
}
async function fetchApi(endpoint, options = {}) {
    const { token, isMultipart, headers, body, ...rest } = options;
    const defaultHeaders = {
        'Accept': 'application/json',
        ...normalizeHeaders(headers)
    };
    if (!isMultipart) {
        defaultHeaders['Content-Type'] = 'application/json';
    }
    const finalHeaders = {
        ...defaultHeaders,
        ...token ? {
            'Authorization': `Bearer ${token}`
        } : {}
    };
    // Chỉ stringify nếu không phải FormData
    const fetchBody = body ? !isMultipart && !(body instanceof FormData) ? JSON.stringify(body) : body : undefined;
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...rest,
        headers: finalHeaders,
        body: fetchBody
    });
    const responseText = await response.text();
    if (!response.ok) {
        let errorData = {
            message: 'An unknown error occurred'
        };
        try {
            errorData = JSON.parse(responseText);
        } catch (e) {
            errorData.message = responseText || response.statusText;
        }
        throw new Error(errorData.message);
    }
    try {
        return responseText ? JSON.parse(responseText) : {};
    } catch (e) {
        return {};
    }
}
const parseDate = (dateString)=>{
    const parts = dateString.split('/');
    if (parts.length !== 3) {
        // Fallback cho trường hợp định dạng không đúng, trả về ngày không hợp lệ
        return new Date(NaN);
    }
    // parts[0] = ngày (dd), parts[1] = tháng (mm), parts[2] = năm (yyyy)
    // Lưu ý: Tháng trong JS là 0-indexed (0=tháng 1, 11=tháng 12), nên phải trừ 1.
    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
};
const sizeToNumber = (size)=>{
    if (!size) return 0;
    const parts = size.trim().split(/\s+/);
    const rawValue = parts[0]?.replace(',', '.');
    const unit = (parts[1] || "").toUpperCase();
    const value = parseFloat(rawValue) || 0;
    switch(unit){
        case "GB":
            return value * 1024 * 1024 * 1024;
        case "MB":
        case "M":
            return value * 1024 * 1024;
        case "KB":
        case "K":
            return value * 1024;
        default:
            // Giả sử bytes nếu không có unit
            return value;
    }
};
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/lib/api/authController.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/api/authController.ts
__turbopack_context__.s([
    "authController",
    ()=>authController
]);
const authController = {
    /**
   * POST /auth/login: Xử lý đăng nhập và lưu token.
   * @param payload {username, password}
   */ login: async (payload)=>{
        // Giả lập call API
        const data = {
            user: {
                id: 'mock',
                username: payload.username,
                email: 'mock@mock.com',
                role: 'admin'
            },
            token: 'mock-token'
        };
        // Nếu có backend thực:
        // const data = await fetchApi<LoginData>('/auth/login', {
        //   method: 'POST',
        //   body: payload,
        // });
        // setAuthData(data); // Tái kích hoạt khi có hàm setAuthData
        return data;
    },
    /**
   * POST /auth/register: Xử lý đăng ký người dùng mới.
   * @param payload {username, email, password}
   */ register: async (payload)=>{
        // Giả lập call API
        const data = {
            user: {
                id: 'mock-reg',
                username: payload.username,
                email: payload.email,
                role: 'user'
            },
            token: 'mock-reg-token'
        };
        // Nếu có backend thực:
        // const data = await fetchApi<LoginData>('/auth/register', {
        //   method: 'POST',
        //   body: payload,
        // });
        // setAuthData(data); // Tái kích hoạt khi có hàm setAuthData
        return data;
    },
    /**
   * Xử lý đăng xuất (chủ yếu là xóa token).
   */ logout: ()=>{
        // Cần gọi hàm xóa token ở đây (ví dụ: removeAuthData())
        console.log("Logged out (Token removed from client)");
    }
};
}),
"[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/alldocuments/AlldocumentsUI.tsx (Bản cập nhật cuối cùng sau khi hợp nhất và sửa lỗi TS2339)
__turbopack_context__.s([
    "default",
    ()=>AlldocumentsUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$DocumentsTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/DocumentsTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$UploadDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/UploadDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/node_modules/next/navigation.js [app-ssr] (ecmascript)"); // <--- ĐÃ SỬA: Thêm usePathname
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$api$2f$authController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/lib/api/authController.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// =======================================================
// KHỐI MOCK DATA VÀ CONSTANTS
// =======================================================
const mockDocuments = [
    {
        id: "1",
        name: "Quy định nội bộ 2024.pdf",
        type: "PDF",
        size: "2.4 MB",
        uploadedBy: "Nguyễn Văn A",
        uploadedAt: "15/03/2024"
    },
    {
        id: "2",
        name: "Báo cáo tài chính Q1.xlsx",
        type: "Excel",
        size: "1.2 MB",
        uploadedBy: "Trần Thị B",
        uploadedAt: "10/03/2024"
    },
    {
        id: "3",
        name: "Kế hoạch Marketing 2024.pptx",
        type: "PowerPoint",
        size: "5.8 MB",
        uploadedBy: "Lê Văn C",
        uploadedAt: "08/03/2024"
    },
    {
        id: "4",
        name: "Hợp đồng đối tác ABC.docx",
        type: "Word",
        size: "856 KB",
        uploadedBy: "Phạm Thị D",
        uploadedAt: "05/03/2024"
    },
    {
        id: "5",
        name: "Tài liệu đào tạo nhân viên mới.pdf",
        type: "PDF",
        size: "3.2 MB",
        uploadedBy: "Hoàng Văn E",
        uploadedAt: "01/03/2024"
    }
];
const navigationItems = [
    {
        title: "Tất cả tài liệu",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        url: "/alldocuments"
    }
];
const MOCK_CURRENT_USER = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@company.com",
    role: "Admin"
};
// MOCK: Giả định trạng thái đăng nhập
const isLoggedIn = false;
function AlldocumentsUI() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])(); // <--- DÒNG MỚI: Lấy đường dẫn hiện tại
    const [uploadOpen, setUploadOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mockDocuments);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortCriteria, setSortCriteria] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("newest");
    const [currentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_CURRENT_USER);
    // Logic đã được hợp nhất từ App.tsx và AlldocumentsUI.tsx (giữ nguyên)
    const handleUpload = (file, metadata)=>{
        const newDoc = {
            id: Date.now().toString(),
            name: metadata.documentName,
            type: file.name.split('.').pop()?.toUpperCase() || "FILE",
            size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
            uploadedBy: currentUser.name,
            uploadedAt: new Date().toLocaleDateString("vi-VN")
        };
        setDocuments([
            newDoc,
            ...documents
        ]);
    };
    const handleDelete = (id)=>{
        setDocuments(documents.filter((doc)=>doc.id !== id));
    };
    const handleDownload = (id)=>{
        console.log("Downloading document:", id);
    };
    const handleEditInfo = (doc)=>{
        alert(`[CHỨC NĂNG CHỈNH SỬA] Mở form chỉnh sửa thông tin cho tài liệu: ${doc.name}`);
    };
    const handleAuthRedirect = ()=>{
        router.push("/login");
    };
    const handleLogout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$api$2f$authController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authController"].logout();
        router.push("/login");
    };
    // Logic lọc và sắp xếp (giữ nguyên)
    const sortedDocuments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const filtered = documents.filter((doc)=>doc.name.toLowerCase().includes(searchQuery.toLowerCase()));
        const sorted = [
            ...filtered
        ].sort((a, b)=>{
            switch(sortCriteria){
                case "oldest":
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])(a.uploadedAt).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])(b.uploadedAt).getTime();
                case "name":
                    return a.name.localeCompare(b.name);
                case "size":
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeToNumber"])(b.size) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeToNumber"])(a.size);
                case "newest":
                default:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])(b.uploadedAt).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])(a.uploadedAt).getTime();
            }
        });
        return sorted;
    }, [
        documents,
        searchQuery,
        sortCriteria
    ]);
    const getSortLabel = (key)=>{
        switch(key){
            case "newest":
                return "Mới nhất";
            case "oldest":
                return "Cũ nhất";
            case "name":
                return "Tên A-Z";
            case "size":
                return "Kích thước";
            default:
                return "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen w-full flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex h-16 items-center justify-between border-b bg-background px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                            className: "h-6 w-6 text-primary-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "DocManager"
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Hệ thống quản lý tài liệu"
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleAuthRedirect,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                            className: "mr-2 size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        "Đăng nhập"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                        className: "h-6 w-6 text-primary-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "DocManager"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: "Quản lý tài liệu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                                    children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                                                isActive: pathname === item.url,
                                                                onClick: ()=>router.push(item.url),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    item.title === "Tất cả tài liệu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "secondary",
                                                                        className: "ml-auto",
                                                                        children: documents.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, item.title, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarInset"], {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                        className: "flex items-center justify-between border-b px-6 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        children: "Tất cả tài liệu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: [
                                                            sortedDocuments.length,
                                                            " tài liệu"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>setUploadOpen(true),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Tải lên"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 border-b px-6 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Tìm kiếm tài liệu...",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "pl-9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 310,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: sortCriteria,
                                                onValueChange: (value)=>setSortCriteria(value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-[180px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: getSortLabel(sortCriteria)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "newest",
                                                                children: "Mới nhất"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "oldest",
                                                                children: "Cũ nhất"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "name",
                                                                children: "Tên A-Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "size",
                                                                children: "Kích thước"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                        className: "flex-1 overflow-auto p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$DocumentsTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentsTable"], {
                                            documents: sortedDocuments,
                                            onDelete: handleDelete,
                                            onDownload: handleDownload,
                                            currentUser: currentUser,
                                            onEditInfo: handleEditInfo
                                        }, void 0, false, {
                                            fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pttkht$2f$PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo$2f$src$2f$components$2f$UploadDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadDialog"], {
                open: uploadOpen,
                onOpenChange: setUploadOpen,
                onUpload: handleUpload
            }, void 0, false, {
                fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pttkht/PTTKHTTT_He_thong_quan_ly_tai_lieu_noi_bo/src/components/alldocuments/AlldocumentsUI.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2af66f73._.js.map