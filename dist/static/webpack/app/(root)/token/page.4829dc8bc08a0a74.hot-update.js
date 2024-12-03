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

/***/ "(app-pages-browser)/./src/app/components/Tokens/CreateToken.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/Tokens/CreateToken.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useNotifications */ \"(app-pages-browser)/./src/app/hooks/useNotifications.tsx\");\n/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils */ \"(app-pages-browser)/./src/app/utils/index.ts\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/extensions/extensionType.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/constants.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/extensions/metadataPointer/instructions.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/instructions/initializeMint.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/state/mint.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/instructions/associatedTokenAccount.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @solana/spl-token */ \"(app-pages-browser)/./node_modules/@solana/spl-token/lib/esm/instructions/mintTo.js\");\n/* harmony import */ var _solana_spl_token_metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/spl-token-metadata */ \"(app-pages-browser)/./node_modules/@solana/spl-token-metadata/lib/esm/state.js\");\n/* harmony import */ var _solana_spl_token_metadata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @solana/spl-token-metadata */ \"(app-pages-browser)/./node_modules/@solana/spl-token-metadata/lib/esm/instruction.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Nofitication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Nofitication */ \"(app-pages-browser)/./src/app/components/Nofitication.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import { useNotification } from \"@/app/hooks/useNotifications\";\n// import Notification from \"../Nofitication\";\nconst LaunchToken = ()=>{\n    _s();\n    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection)();\n    const { publicKey, sendTransaction } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const symbolRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const uriRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const supplyRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const { notify, message, transactionSignature, showNotification, hideNotification } = (0,_app_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_1__.useNotification)();\n    if (!publicKey) return null;\n    const handleCreateToken = async ()=>{\n        var _nameRef_current, _symbolRef_current, _uriRef_current, _supplyRef_current;\n        const name = (_nameRef_current = nameRef.current) === null || _nameRef_current === void 0 ? void 0 : _nameRef_current.value;\n        const symbol = (_symbolRef_current = symbolRef.current) === null || _symbolRef_current === void 0 ? void 0 : _symbolRef_current.value;\n        const uri = (_uriRef_current = uriRef.current) === null || _uriRef_current === void 0 ? void 0 : _uriRef_current.value;\n        const initialSupply = (_supplyRef_current = supplyRef.current) === null || _supplyRef_current === void 0 ? void 0 : _supplyRef_current.value;\n        // Validate input fields\n        if (!name || !symbol || !uri || !initialSupply) {\n            alert(\"All fields are required.\");\n            return;\n        }\n        // Validate address\n        if (!(0,_app_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(publicKey.toBase58())) {\n            alert(\"Invalid wallet address.\");\n            return;\n        }\n        const mintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Keypair.generate();\n        const metadata = {\n            mint: publicKey,\n            name,\n            symbol,\n            uri,\n            additionalMetadata: []\n        };\n        const mintLen = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_8__.getMintLen)([\n            _solana_spl_token__WEBPACK_IMPORTED_MODULE_8__.ExtensionType.MetadataPointer\n        ]);\n        const metadataLen = _solana_spl_token__WEBPACK_IMPORTED_MODULE_8__.TYPE_SIZE + _solana_spl_token__WEBPACK_IMPORTED_MODULE_8__.LENGTH_SIZE + (0,_solana_spl_token_metadata__WEBPACK_IMPORTED_MODULE_9__.pack)(metadata).length;\n        const lamports = await connection.getMinimumBalanceForRentExemption(mintLen + metadataLen);\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.SystemProgram.createAccount({\n            fromPubkey: publicKey,\n            newAccountPubkey: mintKeypair.publicKey,\n            space: mintLen,\n            lamports,\n            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID\n        }), (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_11__.createInitializeMetadataPointerInstruction)(mintKeypair.publicKey, publicKey, mintKeypair.publicKey, _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID), (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_12__.createInitializeMintInstruction)(mintKeypair.publicKey, 9, publicKey, null, _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID), (0,_solana_spl_token_metadata__WEBPACK_IMPORTED_MODULE_13__.createInitializeInstruction)({\n            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID,\n            mint: mintKeypair.publicKey,\n            metadata: mintKeypair.publicKey,\n            name: metadata.name,\n            symbol: metadata.symbol,\n            uri: metadata.uri,\n            mintAuthority: publicKey,\n            updateAuthority: publicKey\n        }));\n        transaction.feePayer = publicKey;\n        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;\n        transaction.partialSign(mintKeypair);\n        await sendTransaction(transaction, connection);\n        const associatedToken = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_14__.getAssociatedTokenAddressSync)(mintKeypair.publicKey, publicKey, false, _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID);\n        const transaction2 = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction().add((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_15__.createAssociatedTokenAccountInstruction)(publicKey, associatedToken, publicKey, mintKeypair.publicKey, _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID));\n        await sendTransaction(transaction2, connection);\n        const transaction3 = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction().add((0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_16__.createMintToInstruction)(mintKeypair.publicKey, associatedToken, publicKey, Number(initialSupply) * 10 ** 9, [], _solana_spl_token__WEBPACK_IMPORTED_MODULE_10__.TOKEN_2022_PROGRAM_ID));\n        const signature = await sendTransaction(transaction3, connection);\n        // Show success notification\n        showNotification(\"Token Creation successful!\", signature);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-red-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-auto w-full bg-green-300\",\n                children: \"Hello World\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\CreateToken.tsx\",\n                lineNumber: 157,\n                columnNumber: 13\n            }, undefined),\n            notify && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nofitication__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                message: message,\n                transactionSignature: transactionSignature,\n                notify: notify,\n                onClose: hideNotification\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\CreateToken.tsx\",\n                lineNumber: 160,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gokul-pant\\\\Desktop\\\\real\\\\solana\\\\src\\\\app\\\\components\\\\Tokens\\\\CreateToken.tsx\",\n        lineNumber: 156,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LaunchToken, \"x8YqeED0XvxzH76cK5I72prV6Es=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet,\n        _app_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_1__.useNotification\n    ];\n});\n_c = LaunchToken;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LaunchToken);\n{\n/* <input ref={nameRef} type=\"text\" placeholder=\"Token Name\" />\n            <input ref={symbolRef} type=\"text\" placeholder=\"Token Symbol\" />\n            <input\n                ref={uriRef}\n                type=\"text\"\n                placeholder=\"Image URL (Metadata URI)\"\n            />\n            <input ref={supplyRef} type=\"number\" placeholder=\"Initial Supply\" />\n            <button onClick={handleCreateToken} type=\"button\">\n                Create a Token\n            </button> */ }var _c;\n$RefreshReg$(_c, \"LaunchToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2tlbnMvQ3JlYXRlVG9rZW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUrRDtBQUN0QjtBQVlkO0FBQ29EO0FBQ1A7QUFDRjtBQUN2QztBQUNZO0FBQzNDLGtFQUFrRTtBQUNsRSw4Q0FBOEM7QUFFOUMsTUFBTXFCLGNBQWM7O0lBQ2hCLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdSLDJFQUFhQTtJQUNwQyxNQUFNLEVBQUVTLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdULHVFQUFTQTtJQUVoRCxNQUFNVSxVQUFVTiw2Q0FBTUEsQ0FBbUI7SUFDekMsTUFBTU8sWUFBWVAsNkNBQU1BLENBQW1CO0lBQzNDLE1BQU1RLFNBQVNSLDZDQUFNQSxDQUFtQjtJQUN4QyxNQUFNUyxZQUFZVCw2Q0FBTUEsQ0FBbUI7SUFFM0MsTUFBTSxFQUNGVSxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsb0JBQW9CLEVBQ3BCQyxnQkFBZ0IsRUFDaEJDLGdCQUFnQixFQUNuQixHQUFHakMsNEVBQWVBO0lBRW5CLElBQUksQ0FBQ3VCLFdBQVcsT0FBTztJQUV2QixNQUFNVyxvQkFBb0I7WUFDVFQsa0JBQ0VDLG9CQUNIQyxpQkFDVUM7UUFIdEIsTUFBTU8sUUFBT1YsbUJBQUFBLFFBQVFXLE9BQU8sY0FBZlgsdUNBQUFBLGlCQUFpQlksS0FBSztRQUNuQyxNQUFNQyxVQUFTWixxQkFBQUEsVUFBVVUsT0FBTyxjQUFqQlYseUNBQUFBLG1CQUFtQlcsS0FBSztRQUN2QyxNQUFNRSxPQUFNWixrQkFBQUEsT0FBT1MsT0FBTyxjQUFkVCxzQ0FBQUEsZ0JBQWdCVSxLQUFLO1FBQ2pDLE1BQU1HLGlCQUFnQloscUJBQUFBLFVBQVVRLE9BQU8sY0FBakJSLHlDQUFBQSxtQkFBbUJTLEtBQUs7UUFFOUMsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxVQUFVLENBQUNDLE9B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InNvdXJjZXMiOlsiQzpcXFVzZXJzXFxnb2t1bC1wYW50XFxEZXNrdG9wXFxyZWFsXFxzb2xhbmFcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxUb2tlbnNcXENyZWF0ZVRva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSBcIkAvYXBwL2hvb2tzL3VzZU5vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBpc1ZhbGlkQWRkcmVzcyBmcm9tIFwiQC9hcHAvdXRpbHNcIjtcbmltcG9ydCB7XG4gICAgY3JlYXRlQXNzb2NpYXRlZFRva2VuQWNjb3VudEluc3RydWN0aW9uLFxuICAgIGNyZWF0ZUluaXRpYWxpemVNZXRhZGF0YVBvaW50ZXJJbnN0cnVjdGlvbixcbiAgICBjcmVhdGVJbml0aWFsaXplTWludEluc3RydWN0aW9uLFxuICAgIGNyZWF0ZU1pbnRUb0luc3RydWN0aW9uLFxuICAgIEV4dGVuc2lvblR5cGUsXG4gICAgZ2V0QXNzb2NpYXRlZFRva2VuQWRkcmVzc1N5bmMsXG4gICAgZ2V0TWludExlbixcbiAgICBMRU5HVEhfU0laRSxcbiAgICBUT0tFTl8yMDIyX1BST0dSQU1fSUQsXG4gICAgVFlQRV9TSVpFLFxufSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIjtcbmltcG9ydCB7IGNyZWF0ZUluaXRpYWxpemVJbnN0cnVjdGlvbiwgcGFjayB9IGZyb20gXCJAc29sYW5hL3NwbC10b2tlbi1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7IEtleXBhaXIsIFN5c3RlbVByb2dyYW0sIFRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi9Ob2ZpdGljYXRpb25cIjtcbi8vIGltcG9ydCB7IHVzZU5vdGlmaWNhdGlvbiB9IGZyb20gXCJAL2FwcC9ob29rcy91c2VOb3RpZmljYXRpb25zXCI7XG4vLyBpbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi9Ob2ZpdGljYXRpb25cIjtcblxuY29uc3QgTGF1bmNoVG9rZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgeyBwdWJsaWNLZXksIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IHN5bWJvbFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCB1cmlSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3Qgc3VwcGx5UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBub3RpZnksXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHRyYW5zYWN0aW9uU2lnbmF0dXJlLFxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uLFxuICAgICAgICBoaWRlTm90aWZpY2F0aW9uLFxuICAgIH0gPSB1c2VOb3RpZmljYXRpb24oKTtcblxuICAgIGlmICghcHVibGljS2V5KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZVJlZi5jdXJyZW50Py52YWx1ZTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sUmVmLmN1cnJlbnQ/LnZhbHVlO1xuICAgICAgICBjb25zdCB1cmkgPSB1cmlSZWYuY3VycmVudD8udmFsdWU7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTdXBwbHkgPSBzdXBwbHlSZWYuY3VycmVudD8udmFsdWU7XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQgZmllbGRzXG4gICAgICAgIGlmICghbmFtZSB8fCAhc3ltYm9sIHx8ICF1cmkgfHwgIWluaXRpYWxTdXBwbHkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgYWRkcmVzc1xuICAgICAgICBpZiAoIWlzVmFsaWRBZGRyZXNzKHB1YmxpY0tleS50b0Jhc2U1OCgpKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIHdhbGxldCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbnRLZXlwYWlyID0gS2V5cGFpci5nZW5lcmF0ZSgpO1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAgICAgICAgIG1pbnQ6IHB1YmxpY0tleSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICB1cmksXG4gICAgICAgICAgICBhZGRpdGlvbmFsTWV0YWRhdGE6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1pbnRMZW4gPSBnZXRNaW50TGVuKFtFeHRlbnNpb25UeXBlLk1ldGFkYXRhUG9pbnRlcl0pO1xuICAgICAgICBjb25zdCBtZXRhZGF0YUxlbiA9IFRZUEVfU0laRSArIExFTkdUSF9TSVpFICsgcGFjayhtZXRhZGF0YSkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IGxhbXBvcnRzID0gYXdhaXQgY29ubmVjdGlvbi5nZXRNaW5pbXVtQmFsYW5jZUZvclJlbnRFeGVtcHRpb24oXG4gICAgICAgICAgICBtaW50TGVuICsgbWV0YWRhdGFMZW4sXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKS5hZGQoXG4gICAgICAgICAgICBTeXN0ZW1Qcm9ncmFtLmNyZWF0ZUFjY291bnQoe1xuICAgICAgICAgICAgICAgIGZyb21QdWJrZXk6IHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBuZXdBY2NvdW50UHVia2V5OiBtaW50S2V5cGFpci5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgc3BhY2U6IG1pbnRMZW4sXG4gICAgICAgICAgICAgICAgbGFtcG9ydHMsXG4gICAgICAgICAgICAgICAgcHJvZ3JhbUlkOiBUT0tFTl8yMDIyX1BST0dSQU1fSUQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNyZWF0ZUluaXRpYWxpemVNZXRhZGF0YVBvaW50ZXJJbnN0cnVjdGlvbihcbiAgICAgICAgICAgICAgICBtaW50S2V5cGFpci5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgcHVibGljS2V5LFxuICAgICAgICAgICAgICAgIG1pbnRLZXlwYWlyLnB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBUT0tFTl8yMDIyX1BST0dSQU1fSUQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlSW5pdGlhbGl6ZU1pbnRJbnN0cnVjdGlvbihcbiAgICAgICAgICAgICAgICBtaW50S2V5cGFpci5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgOSxcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBUT0tFTl8yMDIyX1BST0dSQU1fSUQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlSW5pdGlhbGl6ZUluc3RydWN0aW9uKHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtSWQ6IFRPS0VOXzIwMjJfUFJPR1JBTV9JRCxcbiAgICAgICAgICAgICAgICBtaW50OiBtaW50S2V5cGFpci5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1pbnRLZXlwYWlyLnB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXRhZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIHN5bWJvbDogbWV0YWRhdGEuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHVyaTogbWV0YWRhdGEudXJpLFxuICAgICAgICAgICAgICAgIG1pbnRBdXRob3JpdHk6IHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICB1cGRhdGVBdXRob3JpdHk6IHB1YmxpY0tleSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIHRyYW5zYWN0aW9uLmZlZVBheWVyID0gcHVibGljS2V5O1xuICAgICAgICB0cmFuc2FjdGlvbi5yZWNlbnRCbG9ja2hhc2ggPSAoXG4gICAgICAgICAgICBhd2FpdCBjb25uZWN0aW9uLmdldExhdGVzdEJsb2NraGFzaCgpXG4gICAgICAgICkuYmxvY2toYXNoO1xuICAgICAgICB0cmFuc2FjdGlvbi5wYXJ0aWFsU2lnbihtaW50S2V5cGFpcik7XG5cbiAgICAgICAgYXdhaXQgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBhc3NvY2lhdGVkVG9rZW4gPSBnZXRBc3NvY2lhdGVkVG9rZW5BZGRyZXNzU3luYyhcbiAgICAgICAgICAgIG1pbnRLZXlwYWlyLnB1YmxpY0tleSxcbiAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgVE9LRU5fMjAyMl9QUk9HUkFNX0lELFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uMiA9IG5ldyBUcmFuc2FjdGlvbigpLmFkZChcbiAgICAgICAgICAgIGNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnRJbnN0cnVjdGlvbihcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgYXNzb2NpYXRlZFRva2VuLFxuICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBtaW50S2V5cGFpci5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgVE9LRU5fMjAyMl9QUk9HUkFNX0lELFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcblxuICAgICAgICBhd2FpdCBzZW5kVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24yLCBjb25uZWN0aW9uKTtcblxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbjMgPSBuZXcgVHJhbnNhY3Rpb24oKS5hZGQoXG4gICAgICAgICAgICBjcmVhdGVNaW50VG9JbnN0cnVjdGlvbihcbiAgICAgICAgICAgICAgICBtaW50S2V5cGFpci5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgYXNzb2NpYXRlZFRva2VuLFxuICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFN1cHBseSkgKiAxMCAqKiA5LCAvLyBDb252ZXJ0IHN1cHBseSB0byBzbWFsbGVzdCB1bml0c1xuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIFRPS0VOXzIwMjJfUFJPR1JBTV9JRCxcbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uMywgY29ubmVjdGlvbik7XG5cbiAgICAgICAgLy8gU2hvdyBzdWNjZXNzIG5vdGlmaWNhdGlvblxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiVG9rZW4gQ3JlYXRpb24gc3VjY2Vzc2Z1bCFcIiwgc2lnbmF0dXJlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLXJlZC01MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1hdXRvIHctZnVsbCBiZy1ncmVlbi0zMDBcIj5IZWxsbyBXb3JsZDwvZGl2PlxuXG4gICAgICAgICAgICB7bm90aWZ5ICYmIChcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uU2lnbmF0dXJlPXt0cmFuc2FjdGlvblNpZ25hdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5PXtub3RpZnl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVOb3RpZmljYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXVuY2hUb2tlbjtcblxue1xuICAgIC8qIDxpbnB1dCByZWY9e25hbWVSZWZ9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUb2tlbiBOYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3N5bWJvbFJlZn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRva2VuIFN5bWJvbFwiIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e3VyaVJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbWFnZSBVUkwgKE1ldGFkYXRhIFVSSSlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3N1cHBseVJlZn0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiSW5pdGlhbCBTdXBwbHlcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVUb2tlbn0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBhIFRva2VuXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi9cbn1cbiJdLCJuYW1lcyI6WyJ1c2VOb3RpZmljYXRpb24iLCJpc1ZhbGlkQWRkcmVzcyIsImNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnRJbnN0cnVjdGlvbiIsImNyZWF0ZUluaXRpYWxpemVNZXRhZGF0YVBvaW50ZXJJbnN0cnVjdGlvbiIsImNyZWF0ZUluaXRpYWxpemVNaW50SW5zdHJ1Y3Rpb24iLCJjcmVhdGVNaW50VG9JbnN0cnVjdGlvbiIsIkV4dGVuc2lvblR5cGUiLCJnZXRBc3NvY2lhdGVkVG9rZW5BZGRyZXNzU3luYyIsImdldE1pbnRMZW4iLCJMRU5HVEhfU0laRSIsIlRPS0VOXzIwMjJfUFJPR1JBTV9JRCIsIlRZUEVfU0laRSIsImNyZWF0ZUluaXRpYWxpemVJbnN0cnVjdGlvbiIsInBhY2siLCJ1c2VDb25uZWN0aW9uIiwidXNlV2FsbGV0IiwiS2V5cGFpciIsIlN5c3RlbVByb2dyYW0iLCJUcmFuc2FjdGlvbiIsInVzZVJlZiIsIk5vdGlmaWNhdGlvbiIsIkxhdW5jaFRva2VuIiwiY29ubmVjdGlvbiIsInB1YmxpY0tleSIsInNlbmRUcmFuc2FjdGlvbiIsIm5hbWVSZWYiLCJzeW1ib2xSZWYiLCJ1cmlSZWYiLCJzdXBwbHlSZWYiLCJub3RpZnkiLCJtZXNzYWdlIiwidHJhbnNhY3Rpb25TaWduYXR1cmUiLCJzaG93Tm90aWZpY2F0aW9uIiwiaGlkZU5vdGlmaWNhdGlvbiIsImhhbmRsZUNyZWF0ZVRva2VuIiwibmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInN5bWJvbCIsInVyaSIsImluaXRpYWxTdXBwbHkiLCJhbGVydCIsInRvQmFzZTU4IiwibWludEtleXBhaXIiLCJnZW5lcmF0ZSIsIm1ldGFkYXRhIiwibWludCIsImFkZGl0aW9uYWxNZXRhZGF0YSIsIm1pbnRMZW4iLCJNZXRhZGF0YVBvaW50ZXIiLCJtZXRhZGF0YUxlbiIsImxlbmd0aCIsImxhbXBvcnRzIiwiZ2V0TWluaW11bUJhbGFuY2VGb3JSZW50RXhlbXB0aW9uIiwidHJhbnNhY3Rpb24iLCJhZGQiLCJjcmVhdGVBY2NvdW50IiwiZnJvbVB1YmtleSIsIm5ld0FjY291bnRQdWJrZXkiLCJzcGFjZSIsInByb2dyYW1JZCIsIm1pbnRBdXRob3JpdHkiLCJ1cGRhdGVBdXRob3JpdHkiLCJmZWVQYXllciIsInJlY2VudEJsb2NraGFzaCIsImdldExhdGVzdEJsb2NraGFzaCIsImJsb2NraGFzaCIsInBhcnRpYWxTaWduIiwiYXNzb2NpYXRlZFRva2VuIiwidHJhbnNhY3Rpb24yIiwidHJhbnNhY3Rpb24zIiwiTnVtYmVyIiwic2lnbmF0dXJlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Tokens/CreateToken.tsx\n"));

/***/ })

});