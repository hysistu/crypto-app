// @ts-ignore
const template = (options, template) => {
  const { interfaces, imports, props, exports, jsx, componentName } = options;
  const { tpl } = template;
  return tpl`
    ${imports}

    import classNames from 'classnames';

    ${interfaces}

    const ${componentName} = (${props}) => {
        const { className } = props;

        const svgClasses = classNames(
            'wp-icon',
            className
        );

        return ${jsx};
    };

    ${exports};
  `;
};

module.exports = template;
