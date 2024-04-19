async (__vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exports__, __vite_ssr_exportAll__, __vite_ssr_import_meta__, require, exports, module, __filename, __dirname) => {
  {
    const __vite_ssr_import_0__ = await __vite_ssr_import__('react', { importedNames: ['default'] })
    const __vite_ssr_import_1__ = await __vite_ssr_import__('react-dom', { importedNames: ['default'] })

    function isDOM(node) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element
      // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
      return node instanceof HTMLElement || node instanceof SVGElement
    }
    Object.defineProperty(__vite_ssr_exports__, 'isDOM', { enumerable: true, configurable: true, get() { return isDOM } })

    /**
     * Return if a node is a DOM node. Else will return by `findDOMNode`
     */
    function findDOMNode(node) {
      if (isDOM(node))
        return node

      if (node instanceof __vite_ssr_import_0__.default.Component)
        return __vite_ssr_import_1__.default.findDOMNode(node)

      return null
    }
    Object.defineProperty(__vite_ssr_exports__, 'default', { enumerable: true, configurable: true, value: findDOMNode })
  }
}
