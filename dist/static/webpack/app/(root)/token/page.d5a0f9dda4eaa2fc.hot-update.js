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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useTokens */ \"(app-pages-browser)/./src/app/hooks/useTokens.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst DisplayTokenPage = ()=>{\n    _s();\n    const tokensWithMetadata = (0,_app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_1__.useTokens)(true); // Set includeMetadata to true\n    const { publicKey } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();\n    if (!publicKey) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please connect your wallet to see your tokens.\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n        lineNumber: 11,\n        columnNumber: 16\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Display Token Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid w-full grid-cols-2 bg-slate-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded-xl border border-zinc-800/50 p-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-lg space-y-2 bg-red-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Name: ROSHAN\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Symbol: ROS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Amount: 4975\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"truncate\",\n                                    children: [\n                                        \"Token Account Address:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"truncate\",\n                                            children: \"5iuT3qrF8VZRmCzvJdNhyY4BVrXDoJiZCrEZaGcfGh3p\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Mint Address: FbBqZon4WvXHVZrcYkHnvGc7goUrEqvV3Poa4Bg3brcy\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            tokensWithMetadata.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No tokens found.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tokensWithMetadata.map((token)=>{\n                    var _token_metadata, _token_metadata1;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Token Account Address:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    \" \",\n                                    token.accountPubkey\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Mint Address:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    \" \",\n                                    token.mintAddress\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Amount:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    \" \",\n                                    token.tokenAmount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Name:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    \" \",\n                                    ((_token_metadata = token.metadata) === null || _token_metadata === void 0 ? void 0 : _token_metadata.name) || \"Undefined\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Symbol:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    \" \",\n                                    ((_token_metadata1 = token.metadata) === null || _token_metadata1 === void 0 ? void 0 : _token_metadata1.symbol) || \"Undefined\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, token.accountPubkey, true, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\DisplayToken.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DisplayTokenPage, \"E7x2WasMgWSZtSxW4Y1g5Od9goI=\", false, function() {\n    return [\n        _app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_1__.useTokens,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet\n    ];\n});\n_c = DisplayTokenPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTokenPage);\nvar _c;\n$RefreshReg$(_c, \"DisplayTokenPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2tlbnMvRGlzcGxheVRva2VuLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0Q7QUFDTztBQUV6RCxNQUFNRSxtQkFBbUI7O0lBQ3JCLE1BQU1DLHFCQUFxQkgsK0RBQVNBLENBQUMsT0FBTyw4QkFBOEI7SUFDMUUsTUFBTSxFQUFFSSxTQUFTLEVBQUUsR0FBR0gsdUVBQVNBO0lBRS9CLElBQUksQ0FBQ0csV0FDRCxxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztJQUVoQixxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7OENBQUk7Ozs7Ozs4Q0FDTCw4REFBQ0E7OENBQUk7Ozs7Ozs4Q0FDTCw4REFBQ0E7OENBQUk7Ozs7Ozs4Q0FDTCw4REFBQ0E7b0NBQUlDLFdBQVU7O3dDQUFXO3NEQUV0Qiw4REFBQ0U7NENBQUtGLFdBQVU7c0RBQVc7Ozs7Ozs7Ozs7Ozs4Q0FJL0IsOERBQUNEOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNYiw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7Ozs7Ozs7OztZQUVSRixtQkFBbUJNLE1BQU0sS0FBSyxrQkFDM0IsOERBQUNKOzBCQUFJOzs7OzswQ0FFTCw4REFBQ0s7MEJBQ0lQLG1CQUFtQlEsR0FBRyxDQUFDLENBQUNDO3dCQWVaQSxpQkFJQUE7eUNBbEJULDhEQUFDQzs7MENBQ0csOERBQUNSOztrREFDRyw4REFBQ1M7a0RBQU87Ozs7OztvQ0FBZ0M7b0NBQ3ZDRixNQUFNRyxhQUFhOzs7Ozs7OzBDQUV4Qiw4REFBQ1Y7O2tEQUNHLDhEQUFDUztrREFBTzs7Ozs7O29DQUF1QjtvQ0FDOUJGLE1BQU1JLFdBQVc7Ozs7Ozs7MENBRXRCLDhEQUFDWDs7a0RBQ0csOERBQUNTO2tEQUFPOzs7Ozs7b0NBQWdCO29DQUFFRixNQUFNSyxXQUFXOzs7Ozs7OzBDQUUvQyw4REFBQ1o7O2tEQUNHLDhEQUFDUztrREFBTzs7Ozs7O29DQUFlO29DQUN0QkYsRUFBQUEsa0JBQUFBLE1BQU1NLFFBQVEsY0FBZE4sc0NBQUFBLGdCQUFnQk8sSUFBSSxLQUFJOzs7Ozs7OzBDQUU3Qiw4REFBQ2Q7O2tEQUNHLDhEQUFDUztrREFBTzs7Ozs7O29DQUFpQjtvQ0FDeEJGLEVBQUFBLG1CQUFBQSxNQUFNTSxRQUFRLGNBQWROLHVDQUFBQSxpQkFBZ0JRLE1BQU0sS0FBSTs7Ozs7OzswQ0FFL0IsOERBQUNDOzs7Ozs7dUJBcEJJVCxNQUFNRyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQTJCcEQ7R0FwRU1iOztRQUN5QkYsMkRBQVNBO1FBQ2RDLG1FQUFTQTs7O0tBRjdCQztBQXNFTixpRUFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdva3VsLXBhbnRcXERlc2t0b3BcXHJlYWxcXHNvbGFuYVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXFRva2Vuc1xcRGlzcGxheVRva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlVG9rZW5zIH0gZnJvbSBcIkAvYXBwL2hvb2tzL3VzZVRva2Vuc1wiO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcblxuY29uc3QgRGlzcGxheVRva2VuUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2tlbnNXaXRoTWV0YWRhdGEgPSB1c2VUb2tlbnModHJ1ZSk7IC8vIFNldCBpbmNsdWRlTWV0YWRhdGEgdG8gdHJ1ZVxuICAgIGNvbnN0IHsgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcblxuICAgIGlmICghcHVibGljS2V5KVxuICAgICAgICByZXR1cm4gPGRpdj5QbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCB0byBzZWUgeW91ciB0b2tlbnMuPC9kaXY+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxoMj5EaXNwbGF5IFRva2VuIFBhZ2U8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBncmlkLWNvbHMtMiBiZy1zbGF0ZS02MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXppbmMtODAwLzUwIHAtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIHNwYWNlLXktMiBiZy1yZWQtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5hbWU6IFJPU0hBTjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TeW1ib2w6IFJPUzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BbW91bnQ6IDQ5NzU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbiBBY2NvdW50IEFkZHJlc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNWl1VDNxckY4VlpSbUN6dkpkTmh5WTRCVnJYRG9KaVpDckVaYUdjZkdoM3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCBBZGRyZXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZiQnFab240V3ZYSFZacmNZa0hudkdjN2dvVXJFcXZWM1BvYTRCZzNicmN5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4wMTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+MDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjAxPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4wMTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+MDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjAxPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4wMTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dG9rZW5zV2l0aE1ldGFkYXRhLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2Pk5vIHRva2VucyBmb3VuZC48L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7dG9rZW5zV2l0aE1ldGFkYXRhLm1hcCgodG9rZW4pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Rva2VuLmFjY291bnRQdWJrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG9rZW4gQWNjb3VudCBBZGRyZXNzOjwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmFjY291bnRQdWJrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NaW50IEFkZHJlc3M6PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4ubWludEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbW91bnQ6PC9zdHJvbmc+IHt0b2tlbi50b2tlbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5hbWU6PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4ubWV0YWRhdGE/Lm5hbWUgfHwgXCJVbmRlZmluZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlN5bWJvbDo8L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5tZXRhZGF0YT8uc3ltYm9sIHx8IFwiVW5kZWZpbmVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUb2tlblBhZ2U7XG4iXSwibmFtZXMiOlsidXNlVG9rZW5zIiwidXNlV2FsbGV0IiwiRGlzcGxheVRva2VuUGFnZSIsInRva2Vuc1dpdGhNZXRhZGF0YSIsInB1YmxpY0tleSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3BhbiIsImxlbmd0aCIsInVsIiwibWFwIiwidG9rZW4iLCJsaSIsInN0cm9uZyIsImFjY291bnRQdWJrZXkiLCJtaW50QWRkcmVzcyIsInRva2VuQW1vdW50IiwibWV0YWRhdGEiLCJuYW1lIiwic3ltYm9sIiwiaHIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Tokens/DisplayToken.tsx\n"));

/***/ })

});