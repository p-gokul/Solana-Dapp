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

/***/ "(app-pages-browser)/./src/app/components/Tokens/RevokeDelegatedToken.tsx":
/*!************************************************************!*\
  !*** ./src/app/components/Tokens/RevokeDelegatedToken.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useNotifications */ \"(app-pages-browser)/./src/app/hooks/useNotifications.tsx\");\n/* harmony import */ var _app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/hooks/useTokens */ \"(app-pages-browser)/./src/app/hooks/useTokens.tsx\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/instructions/revoke.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/constants.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ \"(app-pages-browser)/./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Nofitication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Nofitication */ \"(app-pages-browser)/./src/app/components/Nofitication.tsx\");\n// MintTokenPage.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst RevokeDelegatedToken = ()=>{\n    _s();\n    const tokens = (0,_app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_2__.useTokens)(); // Fetch tokens without metadata\n    const { publicKey, sendTransaction } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useConnection)();\n    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [selectedToken, setSelectedToken] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { notify, message, transactionSignature, showNotification, hideNotification } = (0,_app_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_1__.useNotification)();\n    const openModal = (token)=>{\n        setSelectedToken(token);\n        setModalIsOpen(true);\n    };\n    const closeModal = ()=>{\n        setSelectedToken(null);\n        // setDelegateAmount(\"\");\n        setModalIsOpen(false);\n    };\n    const handleRevokeDelegate = async ()=>{\n        if (!publicKey || !selectedToken) {\n            alert(\"Wallet not connected or token not selected!\");\n            return;\n        }\n        try {\n            // const mintPubkey = new PublicKey(selectedToken.mintAddress);\n            const ATA = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(selectedToken.tokenAccountAddress);\n            // const recipientPublicKey = new PublicKey(recipientAddress);\n            // const amountToDelegate =\n            //   parseFloat(delegateAmount) * Math.pow(10, selectedToken.decimals);\n            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction().add((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_9__.createRevokeInstruction)(ATA, publicKey, [], _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID));\n            const signature = await sendTransaction(transaction, connection);\n            // alert(`Transaction successful! Signature: ${signature}`);\n            // Show success notification\n            showNotification(\"Delegated Token Revoked !!\", signature);\n            closeModal();\n        } catch (_error) {\n            alert(\"Error delegating tokens:\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Revoke Token Delegation Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            tokens.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No tokens found.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                lineNumber: 82,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid w-full grid-cols-2\",\n                children: tokens.map((token)=>{\n                    var _token_metadata, _token_metadata1;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center rounded-xl p-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-lg space-y-2 rounded-xl bg-slate-900 p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Name: \",\n                                        (_token_metadata = token.metadata) === null || _token_metadata === void 0 ? void 0 : _token_metadata.name,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Symbol:\",\n                                        ((_token_metadata1 = token.metadata) === null || _token_metadata1 === void 0 ? void 0 : _token_metadata1.symbol) || \"Undefined\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Amount: \",\n                                        token.tokenAmount\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"truncate\",\n                                        children: [\n                                            \"Token Account Address:\",\n                                            token.accountPubkey\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>openModal(token),\n                                    className: \"mx-auto border bg-slate-600 p-2\",\n                                    children: \"Revoke Delegated Token\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 29\n                        }, undefined)\n                    }, token.accountPubkey, false, {\n                        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                lineNumber: 84,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_5___default()), {\n                isOpen: modalIsOpen,\n                onRequestClose: closeModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-60 mt-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Revoke Delegated Tokens\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, undefined),\n                        selectedToken && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Mint Address:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        selectedToken.mintAddress\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Associated Token Account Address:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        selectedToken.tokenAccountAddress\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: handleRevokeDelegate,\n                                    children: \"Revoke Delegate\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: closeModal,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, undefined),\n            notify && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nofitication__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                message: message,\n                transactionSignature: transactionSignature,\n                notify: notify,\n                onClose: hideNotification\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n                lineNumber: 146,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\RevokeDelegatedToken.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RevokeDelegatedToken, \"r6i0ug4X/EtdHbaluMW5niijSC4=\", false, function() {\n    return [\n        _app_hooks_useTokens__WEBPACK_IMPORTED_MODULE_2__.useTokens,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useConnection,\n        _app_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_1__.useNotification\n    ];\n});\n_c = RevokeDelegatedToken;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RevokeDelegatedToken);\nvar _c;\n$RefreshReg$(_c, \"RevokeDelegatedToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2tlbnMvUmV2b2tlRGVsZWdhdGVkVG9rZW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9COzs7QUFJMkM7QUFDRjtBQUtsQztBQUM2QztBQUNmO0FBQ3hCO0FBQ0Q7QUFDVztBQUUzQyxNQUFNVyx1QkFBdUI7O0lBQ3pCLE1BQU1DLFNBQVNYLCtEQUFTQSxJQUFJLGdDQUFnQztJQUM1RCxNQUFNLEVBQUVZLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdULHVFQUFTQTtJQUNoRCxNQUFNLEVBQUVVLFVBQVUsRUFBRSxHQUFHWCwyRUFBYUE7SUFFcEMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFtQjtJQUNyRSxNQUFNLEVBQ0ZZLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxvQkFBb0IsRUFDcEJDLGdCQUFnQixFQUNoQkMsZ0JBQWdCLEVBQ25CLEdBQUd4Qiw0RUFBZUE7SUFFbkIsTUFBTXlCLFlBQVksQ0FBQ0M7UUFDZlAsaUJBQWlCTztRQUNqQlQsZUFBZTtJQUNuQjtJQUVBLE1BQU1VLGFBQWE7UUFDZlIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QkYsZUFBZTtJQUNuQjtJQUVBLE1BQU1XLHVCQUF1QjtRQUN6QixJQUFJLENBQUNmLGFBQWEsQ0FBQ0ssZUFBZTtZQUM5QlcsTUFBTTtZQUNOO1FBQ0o7UUFFQSxJQUFJO1lBQ0EsK0RBQStEO1lBQy9ELE1BQU1DLE1BQU0sSUFBSXhCLHNEQUFTQSxDQUFDWSxjQUFjYSxtQkFBbUI7WUFDM0QsOERBQThEO1lBRTlELDJCQUEyQjtZQUMzQix1RUFBdUU7WUFFdkUsTUFBTUMsY0FBYyxJQUFJekIsd0RBQVdBLEdBQUcwQixHQUFHLENBQ3JDOUIsMEVBQXVCQSxDQUNuQjJCLEtBQ0FqQixXQUNBLEVBQUUsRUFDRlgscUVBQXFCQTtZQUk3QixNQUFNZ0MsWUFBWSxNQUFNcEIsZ0JBQWdCa0IsYUFBYWpCO1lBQ3JELDREQUE0RDtZQUM1RCw0QkFBNEI7WUFDNUJRLGlCQUFpQiw4QkFBOEJXO1lBRS9DUDtRQUNKLEVBQUUsT0FBT1EsUUFBUTtZQUNiTixNQUFNO1FBQ1Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7WUFDSHpCLE9BQU8wQixNQUFNLEtBQUssa0JBQ2YsOERBQUNGOzBCQUFJOzs7OzswQ0FFTCw4REFBQ0E7Z0JBQUlHLFdBQVU7MEJBQ1YzQixPQUFPNEIsR0FBRyxDQUFDLENBQUNkO3dCQU1XQSxpQkFHUEE7eUNBUmIsOERBQUNVO3dCQUNHRyxXQUFVO2tDQUdWLDRFQUFDSDs0QkFBSUcsV0FBVTs7OENBQ1gsOERBQUNIOzt3Q0FBSTt5Q0FBT1Ysa0JBQUFBLE1BQU1lLFFBQVEsY0FBZGYsc0NBQUFBLGdCQUFnQmdCLElBQUk7d0NBQUM7Ozs7Ozs7OENBQ2pDLDhEQUFDTjs7d0NBQUk7d0NBRUFWLEVBQUFBLG1CQUFBQSxNQUFNZSxRQUFRLGNBQWRmLHVDQUFBQSxpQkFBZ0JpQixNQUFNLEtBQUk7Ozs7Ozs7OENBRS9CLDhEQUFDUDs7d0NBQUk7d0NBQVNWLE1BQU1rQixXQUFXOzs7Ozs7OzhDQUMvQiw4REFBQ1I7b0NBQUlHLFdBQVU7OENBQ1gsNEVBQUNIO3dDQUFJRyxXQUFVOzs0Q0FBVzs0Q0FFckJiLE1BQU1tQixhQUFhOzs7Ozs7Ozs7Ozs7OENBRzVCLDhEQUFDQztvQ0FDR0MsTUFBSztvQ0FDTEMsU0FBUyxJQUFNdkIsVUFBVUM7b0NBQ3pCYSxXQUFVOzhDQUNiOzs7Ozs7Ozs7Ozs7dUJBbkJBYixNQUFNbUIsYUFBYTs7Ozs7Ozs7Ozs7MEJBNEJ4Qyw4REFBQ3BDLG9EQUFLQTtnQkFBQ3dDLFFBQVFqQztnQkFBYWtDLGdCQUFnQnZCOzBCQUN4Qyw0RUFBQ1M7b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDRjtzQ0FBRzs7Ozs7O3dCQUNIbkIsK0JBQ0c7OzhDQUNJLDhEQUFDaUM7O3NEQUNHLDhEQUFDQztzREFBTzs7Ozs7O3dDQUNQbEMsY0FBY21DLFdBQVc7Ozs7Ozs7OENBRTlCLDhEQUFDRjs7c0RBQ0csOERBQUNDO3NEQUFPOzs7Ozs7d0NBR1BsQyxjQUFjYSxtQkFBbUI7Ozs7Ozs7OENBR3RDLDhEQUFDZTtvQ0FDR0MsTUFBSztvQ0FDTEMsU0FBU3BCOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNrQjtvQ0FBT0MsTUFBSztvQ0FBU0MsU0FBU3JCOzhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTzFEUCx3QkFDRyw4REFBQ1YscURBQVlBO2dCQUNUVyxTQUFTQTtnQkFDVEMsc0JBQXNCQTtnQkFDdEJGLFFBQVFBO2dCQUNSa0MsU0FBUzlCOzs7Ozs7Ozs7Ozs7QUFLN0I7R0F6SU1iOztRQUNhViwyREFBU0E7UUFDZUksbUVBQVNBO1FBQ3pCRCx1RUFBYUE7UUFVaENKLHdFQUFlQTs7O0tBYmpCVztBQTJJTixpRUFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdva3VsLXBhbnRcXERlc2t0b3BcXHJlYWxcXHNvbGFuYVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXFRva2Vuc1xcUmV2b2tlRGVsZWdhdGVkVG9rZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbnRUb2tlblBhZ2UudHN4XG5cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwiQC9hcHAvaG9va3MvdXNlTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgVG9rZW5JbmZvLCB1c2VUb2tlbnMgfSBmcm9tIFwiQC9hcHAvaG9va3MvdXNlVG9rZW5zXCI7XG5pbXBvcnQge1xuICAgIFRPS0VOXzIwMjJfUFJPR1JBTV9JRCxcbiAgICAvLyBjcmVhdGVBcHByb3ZlSW5zdHJ1Y3Rpb24sXG4gICAgY3JlYXRlUmV2b2tlSW5zdHJ1Y3Rpb24sXG59IGZyb20gXCJAc29sYW5hL3NwbC10b2tlblwiO1xuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7IFB1YmxpY0tleSwgVHJhbnNhY3Rpb24gfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vTm9maXRpY2F0aW9uXCI7XG5cbmNvbnN0IFJldm9rZURlbGVnYXRlZFRva2VuID0gKCkgPT4ge1xuICAgIGNvbnN0IHRva2VucyA9IHVzZVRva2VucygpOyAvLyBGZXRjaCB0b2tlbnMgd2l0aG91dCBtZXRhZGF0YVxuICAgIGNvbnN0IHsgcHVibGljS2V5LCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkVG9rZW4sIHNldFNlbGVjdGVkVG9rZW5dID0gdXNlU3RhdGU8VG9rZW5JbmZvIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qge1xuICAgICAgICBub3RpZnksXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHRyYW5zYWN0aW9uU2lnbmF0dXJlLFxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uLFxuICAgICAgICBoaWRlTm90aWZpY2F0aW9uLFxuICAgIH0gPSB1c2VOb3RpZmljYXRpb24oKTtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICh0b2tlbjogVG9rZW5JbmZvKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkVG9rZW4odG9rZW4pO1xuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRUb2tlbihudWxsKTtcbiAgICAgICAgLy8gc2V0RGVsZWdhdGVBbW91bnQoXCJcIik7XG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUmV2b2tlRGVsZWdhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghcHVibGljS2V5IHx8ICFzZWxlY3RlZFRva2VuKSB7XG4gICAgICAgICAgICBhbGVydChcIldhbGxldCBub3QgY29ubmVjdGVkIG9yIHRva2VuIG5vdCBzZWxlY3RlZCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gY29uc3QgbWludFB1YmtleSA9IG5ldyBQdWJsaWNLZXkoc2VsZWN0ZWRUb2tlbi5taW50QWRkcmVzcyk7XG4gICAgICAgICAgICBjb25zdCBBVEEgPSBuZXcgUHVibGljS2V5KHNlbGVjdGVkVG9rZW4udG9rZW5BY2NvdW50QWRkcmVzcyk7XG4gICAgICAgICAgICAvLyBjb25zdCByZWNpcGllbnRQdWJsaWNLZXkgPSBuZXcgUHVibGljS2V5KHJlY2lwaWVudEFkZHJlc3MpO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBhbW91bnRUb0RlbGVnYXRlID1cbiAgICAgICAgICAgIC8vICAgcGFyc2VGbG9hdChkZWxlZ2F0ZUFtb3VudCkgKiBNYXRoLnBvdygxMCwgc2VsZWN0ZWRUb2tlbi5kZWNpbWFscyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKCkuYWRkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZVJldm9rZUluc3RydWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBBVEEsXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgIFRPS0VOXzIwMjJfUFJPR1JBTV9JRCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBUcmFuc2FjdGlvbiBzdWNjZXNzZnVsISBTaWduYXR1cmU6ICR7c2lnbmF0dXJlfWApO1xuICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkRlbGVnYXRlZCBUb2tlbiBSZXZva2VkICEhXCIsIHNpZ25hdHVyZSk7XG5cbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGRlbGVnYXRpbmcgdG9rZW5zOlwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlJldm9rZSBUb2tlbiBEZWxlZ2F0aW9uIFBhZ2U8L2gyPlxuICAgICAgICAgICAge3Rva2Vucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5ObyB0b2tlbnMgZm91bmQuPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKHRva2VuKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXhsIHAtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0b2tlbi5hY2NvdW50UHVia2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgc3BhY2UteS0yIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5hbWU6IHt0b2tlbi5tZXRhZGF0YT8ubmFtZX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeW1ib2w6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4ubWV0YWRhdGE/LnN5bWJvbCB8fCBcIlVuZGVmaW5lZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BbW91bnQ6IHt0b2tlbi50b2tlbkFtb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW4gQWNjb3VudCBBZGRyZXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5hY2NvdW50UHVia2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCh0b2tlbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGJvcmRlciBiZy1zbGF0ZS02MDAgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV2b2tlIERlbGVnYXRlZCBUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsSXNPcGVufSBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02MCBtdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UmV2b2tlIERlbGVnYXRlZCBUb2tlbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUb2tlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1pbnQgQWRkcmVzczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVG9rZW4ubWludEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNzb2NpYXRlZCBUb2tlbiBBY2NvdW50IEFkZHJlc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUb2tlbi50b2tlbkFjY291bnRBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJldm9rZURlbGVnYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV2b2tlIERlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAge25vdGlmeSAmJiAoXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblNpZ25hdHVyZT17dHJhbnNhY3Rpb25TaWduYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeT17bm90aWZ5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoaWRlTm90aWZpY2F0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2b2tlRGVsZWdhdGVkVG9rZW47XG4iXSwibmFtZXMiOlsidXNlTm90aWZpY2F0aW9uIiwidXNlVG9rZW5zIiwiVE9LRU5fMjAyMl9QUk9HUkFNX0lEIiwiY3JlYXRlUmV2b2tlSW5zdHJ1Y3Rpb24iLCJ1c2VDb25uZWN0aW9uIiwidXNlV2FsbGV0IiwiUHVibGljS2V5IiwiVHJhbnNhY3Rpb24iLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiTm90aWZpY2F0aW9uIiwiUmV2b2tlRGVsZWdhdGVkVG9rZW4iLCJ0b2tlbnMiLCJwdWJsaWNLZXkiLCJzZW5kVHJhbnNhY3Rpb24iLCJjb25uZWN0aW9uIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsInNlbGVjdGVkVG9rZW4iLCJzZXRTZWxlY3RlZFRva2VuIiwibm90aWZ5IiwibWVzc2FnZSIsInRyYW5zYWN0aW9uU2lnbmF0dXJlIiwic2hvd05vdGlmaWNhdGlvbiIsImhpZGVOb3RpZmljYXRpb24iLCJvcGVuTW9kYWwiLCJ0b2tlbiIsImNsb3NlTW9kYWwiLCJoYW5kbGVSZXZva2VEZWxlZ2F0ZSIsImFsZXJ0IiwiQVRBIiwidG9rZW5BY2NvdW50QWRkcmVzcyIsInRyYW5zYWN0aW9uIiwiYWRkIiwic2lnbmF0dXJlIiwiX2Vycm9yIiwiZGl2IiwiaDIiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJtZXRhZGF0YSIsIm5hbWUiLCJzeW1ib2wiLCJ0b2tlbkFtb3VudCIsImFjY291bnRQdWJrZXkiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwicCIsInN0cm9uZyIsIm1pbnRBZGRyZXNzIiwib25DbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Tokens/RevokeDelegatedToken.tsx\n"));

/***/ })

});