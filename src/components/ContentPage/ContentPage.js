import './ContentPage.less';
import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class ContentPage {

  static propTypes = {
    body: PropTypes.string.isRequired
  };

  render() {
    var { className, body, other } = this.props;

    return (
      <div className={'ContentPage ' + className}
        dangerouslySetInnerHTML={{__html: body}} {...other} />
    );
  }

}

export default ContentPage;
