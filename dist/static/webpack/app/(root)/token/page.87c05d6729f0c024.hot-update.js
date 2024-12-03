"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/token/page",{

/***/ "(app-pages-browser)/./src/app/components/Tokens/DisplayToken.tsx":
/*!****************************************************!*\
  !*** ./src/app/components/Tokens/DisplayToken.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useTokens */ \"(app-pages-browser)/./src/app/hooks/useTokens.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _barrel_optimize_names_CircleCheckBig_ClipboardIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CircleCheckBig,ClipboardIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-check-big.js\");\n/* harmony import */ var _barrel_optimize_names_CircleCheckBig_ClipboardIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CircleCheckBig,ClipboardIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DisplayTokenPage = ()=>{\n    _s();\n    const tokensWithMetadata = (0,_app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_1__.useTokens)(true); // Set includeMetadata to true\n    const { publicKey } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State for copied status\n    if (!publicKey) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please connect your wallet to see your tokens.\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n        lineNumber: 14,\n        columnNumber: 16\n    }, undefined);\n    const copyAddress = (address)=>{\n        navigator.clipboard.writeText(address);\n        setCopied(true); // Set copied state to true\n        setTimeout(()=>setCopied(false), 1500); // Reset copied state after 2 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Display Token Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid w-full grid-cols-2 bg-slate-600\",\n                children: tokensWithMetadata.map((token)=>{\n                    var _token_metadata, _token_metadata1;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center rounded-xl border border-zinc-800/50 p-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-lg space-y-2 bg-slate-900 p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Name: \",\n                                        (_token_metadata = token.metadata) === null || _token_metadata === void 0 ? void 0 : _token_metadata.name,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Symbol: \",\n                                        ((_token_metadata1 = token.metadata) === null || _token_metadata1 === void 0 ? void 0 : _token_metadata1.symbol) || \"Undefined\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Amount: \",\n                                        token.tokenAmount\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"truncate\",\n                                            children: [\n                                                \"Token Account Address:\",\n                                                token.accountPubkey\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>copyAddress(token.accountPubkey),\n                                            children: copied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleCheckBig_ClipboardIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: \"h-4 w-4 text-green-500\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 41\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleCheckBig_ClipboardIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"truncate\",\n                                            children: [\n                                                \"Mint Address:\",\n                                                token.mintAddress\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>copyAddress(token.mintAddress),\n                                            children: copied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleCheckBig_ClipboardIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: \"h-4 w-4 text-green-500\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 41\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleCheckBig_ClipboardIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined)\n                    }, token.accountPubkey, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DisplayTokenPage, \"9TTutRVZojpnbVE8XkNiL0LfzoI=\", false, function() {\n    return [\n        _app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_1__.useTokens,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet\n    ];\n});\n_c = DisplayTokenPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTokenPage);\nvar _c;\n$RefreshReg$(_c, \"DisplayTokenPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2tlbnMvRGlzcGxheVRva2VuLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ087QUFDSTtBQUM1QjtBQUVqQyxNQUFNSyxtQkFBbUI7O0lBQ3JCLE1BQU1DLHFCQUFxQk4sK0RBQVNBLENBQUMsT0FBTyw4QkFBOEI7SUFDMUUsTUFBTSxFQUFFTyxTQUFTLEVBQUUsR0FBR04sdUVBQVNBO0lBQy9CLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQyxRQUFRLDBCQUEwQjtJQUV2RSxJQUFJLENBQUNHLFdBQ0QscUJBQU8sOERBQUNHO2tCQUFJOzs7Ozs7SUFFaEIsTUFBTUMsY0FBYyxDQUFDQztRQUNqQkMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO1FBQzlCSCxVQUFVLE9BQU8sMkJBQTJCO1FBQzVDTyxXQUFXLElBQU1QLFVBQVUsUUFBUSxPQUFPLHFDQUFxQztJQUNuRjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJTyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1I7Z0JBQUlPLFdBQVU7MEJBQ1ZYLG1CQUFtQmEsR0FBRyxDQUFDLENBQUNDO3dCQU1EQSxpQkFFQ0E7eUNBUHJCLDhEQUFDVjt3QkFDR08sV0FBVTtrQ0FHViw0RUFBQ1A7NEJBQUlPLFdBQVU7OzhDQUNYLDhEQUFDUDs7d0NBQUk7eUNBQU9VLGtCQUFBQSxNQUFNQyxRQUFRLGNBQWRELHNDQUFBQSxnQkFBZ0JFLElBQUk7d0NBQUM7Ozs7Ozs7OENBQ2pDLDhEQUFDWjs7d0NBQUk7d0NBQ1FVLEVBQUFBLG1CQUFBQSxNQUFNQyxRQUFRLGNBQWRELHVDQUFBQSxpQkFBZ0JHLE1BQU0sS0FBSTs7Ozs7Ozs4Q0FFdkMsOERBQUNiOzt3Q0FBSTt3Q0FBU1UsTUFBTUksV0FBVzs7Ozs7Ozs4Q0FDL0IsOERBQUNkO29DQUFJTyxXQUFVOztzREFDWCw4REFBQ1A7NENBQUlPLFdBQVU7O2dEQUFXO2dEQUVyQkcsTUFBTUssYUFBYTs7Ozs7OztzREFFeEIsOERBQUNDOzRDQUNHQyxNQUFLOzRDQUNMQyxTQUFTLElBQ0xqQixZQUFZUyxNQUFNSyxhQUFhO3NEQUdsQ2pCLHVCQUNHLDhEQUFDTix3R0FBY0E7Z0RBQUNlLFdBQVU7Ozs7OzBFQUUxQiw4REFBQ2Qsd0dBQWFBO2dEQUFDYyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJckMsOERBQUNQO29DQUFJTyxXQUFVOztzREFDWCw4REFBQ1A7NENBQUlPLFdBQVU7O2dEQUFXO2dEQUVyQkcsTUFBTVMsV0FBVzs7Ozs7OztzREFFdEIsOERBQUNIOzRDQUNHQyxNQUFLOzRDQUNMQyxTQUFTLElBQ0xqQixZQUFZUyxNQUFNUyxXQUFXO3NEQUdoQ3JCLHVCQUNHLDhEQUFDTix3R0FBY0E7Z0RBQUNlLFdBQVU7Ozs7OzBFQUUxQiw4REFBQ2Qsd0dBQWFBO2dEQUFDYyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF4Q3BDRyxNQUFNSyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtEaEQ7R0F2RU1wQjs7UUFDeUJMLDJEQUFTQTtRQUNkQyxtRUFBU0E7OztLQUY3Qkk7QUF5RU4saUVBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxnb2t1bC1wYW50XFxEZXNrdG9wXFxyZWFsXFxzb2xhbmFcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxUb2tlbnNcXERpc3BsYXlUb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVRva2VucyB9IGZyb20gXCJAL2FwcC9ob29rcy91c2VUb2tlbnNcIjtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQgeyBDaXJjbGVDaGVja0JpZywgQ2xpcGJvYXJkSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERpc3BsYXlUb2tlblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW5zV2l0aE1ldGFkYXRhID0gdXNlVG9rZW5zKHRydWUpOyAvLyBTZXQgaW5jbHVkZU1ldGFkYXRhIHRvIHRydWVcbiAgICBjb25zdCB7IHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgZm9yIGNvcGllZCBzdGF0dXNcblxuICAgIGlmICghcHVibGljS2V5KVxuICAgICAgICByZXR1cm4gPGRpdj5QbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCB0byBzZWUgeW91ciB0b2tlbnMuPC9kaXY+O1xuXG4gICAgY29uc3QgY29weUFkZHJlc3MgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFkZHJlc3MpO1xuICAgICAgICBzZXRDb3BpZWQodHJ1ZSk7IC8vIFNldCBjb3BpZWQgc3RhdGUgdG8gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDE1MDApOyAvLyBSZXNldCBjb3BpZWQgc3RhdGUgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8aDI+RGlzcGxheSBUb2tlbiBQYWdlPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTIgYmctc2xhdGUtNjAwXCI+XG4gICAgICAgICAgICAgICAge3Rva2Vuc1dpdGhNZXRhZGF0YS5tYXAoKHRva2VuKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXppbmMtODAwLzUwIHAtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rva2VuLmFjY291bnRQdWJrZXl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgc3BhY2UteS0yIGJnLXNsYXRlLTkwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5hbWU6IHt0b2tlbi5tZXRhZGF0YT8ubmFtZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3ltYm9sOiB7dG9rZW4ubWV0YWRhdGE/LnN5bWJvbCB8fCBcIlVuZGVmaW5lZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QW1vdW50OiB7dG9rZW4udG9rZW5BbW91bnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuIEFjY291bnQgQWRkcmVzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5hY2NvdW50UHVia2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlBZGRyZXNzKHRva2VuLmFjY291bnRQdWJrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmNsZUNoZWNrQmlnIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpcGJvYXJkSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IEFkZHJlc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4ubWludEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weUFkZHJlc3ModG9rZW4ubWludEFkZHJlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmNsZUNoZWNrQmlnIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpcGJvYXJkSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VG9rZW5QYWdlO1xuIl0sIm5hbWVzIjpbInVzZVRva2VucyIsInVzZVdhbGxldCIsIkNpcmNsZUNoZWNrQmlnIiwiQ2xpcGJvYXJkSWNvbiIsInVzZVN0YXRlIiwiRGlzcGxheVRva2VuUGFnZSIsInRva2Vuc1dpdGhNZXRhZGF0YSIsInB1YmxpY0tleSIsImNvcGllZCIsInNldENvcGllZCIsImRpdiIsImNvcHlBZGRyZXNzIiwiYWRkcmVzcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInRva2VuIiwibWV0YWRhdGEiLCJuYW1lIiwic3ltYm9sIiwidG9rZW5BbW91bnQiLCJhY2NvdW50UHVia2V5IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJtaW50QWRkcmVzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Tokens/DisplayToken.tsx\n"));

/***/ })

});