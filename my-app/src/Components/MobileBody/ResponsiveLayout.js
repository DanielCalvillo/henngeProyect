import useWindowDimensions from '../../hooks/useWindowDimensions.js';

const breakpoints = {
    sm: 500,
    md: 950,
    lg: 1200
}

const ResponsiveLayout = ({ breakPoint = 'md', renderMobile, renderDesktop }) => {
  const { width } = useWindowDimensions();
  return width <= breakpoints[breakPoint] ? renderMobile() : renderDesktop();
};

export default ResponsiveLayout;




