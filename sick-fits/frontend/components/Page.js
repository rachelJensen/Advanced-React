import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>This is a Page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
