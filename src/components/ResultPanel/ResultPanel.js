import React from 'react';
import classNames from 'classnames';
import { AccordionSet, Accordion, FilterAccordionHeader } from '@folio/stripes-components/lib/Accordion';
import { Icon } from '@folio/stripes-components';
import PropTypes from 'prop-types';

import css from './ResultPanel.css';

const accordionsAmount = 4;

export default class ResultPanel extends React.Component {
  static propTypes = {
    itemOnClick: PropTypes.func.isRequired,
  };

  getAccordionLabeL() {
    return (
      <div className={classNames(css.accordionHeaderItem, css.accordionHeader)}>
        <Icon icon="calendar" />
        <div className={classNames(css.accordionHeaderItem, css.bold)}> Source record S1/354</div>
        <div>Title: The origin of species</div>
        <div className={css.accordionHeaderRecords}>
          <div className={css.accordionHeaderItem}><Icon icon="calendar" /> 2 new</div>
          <div className={css.accordionHeaderItem}><Icon icon="calendar" /> 2 new</div>
          <div className={css.accordionHeaderItem}><Icon icon="calendar" /> 2 new</div>
          <div className={classNames(css.accordionHeaderItem, css.accordionHeaderError)}>1 error</div>
        </div>
      </div>
    );
  }

  getAccordions(amount, itemOnClick) {
    const result = [];

    for (let i = 0; i < amount; i++) {
      result.push(
        <Accordion
          label={this.getAccordionLabeL()}
          id={`ex-012${i}`}
          separator={false}
          header={FilterAccordionHeader}
        >
          <div className={css.list}>
            <button type="button" className={css.listItem} onClick={itemOnClick}>
              <div className={classNames(
                css.recordType,
                css.recordTypeOrange
              )}
              />
              <Icon icon="calendar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque delectus.
            </button>
            <button type="button" className={css.listItem} onClick={itemOnClick}>
              <div className={classNames(
                css.recordType,
                css.recordTypeRed
              )}
              />
              <Icon icon="calendar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque delectus.
            </button>
            <button type="button" className={css.listItem} onClick={itemOnClick}>
              <div className={classNames(
                css.recordType,
                css.recordTypeGreen
              )}
              />
              <Icon icon="calendar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque delectus.
            </button>
            <button type="button" className={css.listItem} onClick={itemOnClick}>
              <div className={classNames(
                css.recordType,
                css.recordTypeBlue
              )}
              />
              <Icon icon="calendar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque delectus.
            </button>
            <button type="button" className={css.listItem} onClick={itemOnClick}>
              <div className={classNames(
                css.recordType,
                css.recordTypeDeepskyblue
              )}
              />
              <Icon icon="calendar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque delectus.
            </button>
            <button type="button" className={css.listItem} onClick={itemOnClick}>
              <div className={classNames(
                css.recordType,
                css.recordTypeDarkslateblue
              )}
              />
              <Icon icon="calendar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque delectus.
            </button>
          </div>
        </Accordion>
      );
    }

    return result;
  }

  render() {
    const { itemOnClick } = this.props;

    return (
      <AccordionSet>
        {this.getAccordions(accordionsAmount, itemOnClick)}
      </AccordionSet>
    );
  }
}
