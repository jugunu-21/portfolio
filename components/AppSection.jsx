import PropTypes from 'prop-types';
import AppDecoration from './AppDecoration';

const AppSection = ({ title, closed, children }) => {
  const splitTitleColor = () => {
    const titleBase = title.split(' ');
    const titleStart = titleBase.slice(0, -1).join(' ');
    const titleEnd = titleBase.pop();
    return (
      <h2 className="text-xl lg:text-2xl font-bold text-center">
        {titleStart}
        <span className="text-orange"> {titleEnd}</span>
      </h2>
    );
  };

  return (
    <section className="py-16 lg:py-32 border-b border-light-gray border-opacity-80">
      {splitTitleColor()}
      <AppDecoration type="threeline" closed={closed} />
      {children}
    </section>
  );
};

AppSection.propTypes = {
  title: PropTypes.string,
  closed: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

AppSection.defaultProps = {
  title: '',
  closed: false,
};

export default AppSection;
