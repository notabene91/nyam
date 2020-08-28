import React from 'react';
import './Card.css';
import cat from '../images/cat.png'


class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      isMouseOver: false,
      isMouseLeave: false,
      cardClass: "card_active",
      ovalClass: "card__oval_active",
      overTitle: "Сказочное заморское лакомство"
    };
    this.handleClick = this.handleClick.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  handleClick() {
    const { isActive } = this.state;
    const { disabled } = this.props;
    if (disabled) {
      this.setState({ isActive: false });
    }
    else {
      this.setState({ isActive: !isActive });
      this.setState({ overTitle: "Сказочное заморское лакомство" });
      this.setState({ isMouseOver: true });
      this.setState({ isMouseLeave: false })
      this.setState({ cardClass: "card_active" })
      this.setState({ ovalClass: "card__oval_active" })
    }
  }

  mouseOver() {
    const { disabled } = this.props;
    this.setState({ isMouseOver: true });
    if (disabled) {
      this.setState({ isMouseOver: false });
    }
  }

  mouseLeave() {
    const { isActive } = this.state;
    this.setState({ isMouseLeave: true });
    this.setState({ isMouseOver: false });
    if (isActive) {
      this.setState({ overTitle: "Котэ не одобряет?" })
      this.setState({ cardClass: "card_active-hover" })
      this.setState({ ovalClass: "card__oval_active-hover" })
    }
    else
      this.setState({ overTitle: "Сказочное заморское лакомство" })
  }


  render() {
    const { title, subtitle, portions, textPortions, mouse, textMouse, weight, product, disabled } = this.props;
    const logo = cat;
    const { isActive, isMouseLeave, cardClass, ovalClass, isMouseOver } = this.state;
    const cardClassName = `card ${isActive ? cardClass : '' || isMouseOver ? "card_hover" : '' || disabled ? "card_disabled" : ''} `;
    const ovalClassName = `card__oval ${isActive ? ovalClass : '' || isMouseOver ? "card__oval_hover" : '' || disabled ? "card__oval_disabled" : ''}`;
    const overTitleName = `card__over-title ${isActive && isMouseLeave ? 'card__over-title_active' : ''}`;
    const descriptionName = `description ${disabled ? "description_disabled" : ''}`
    const description = `${disabled ? `Печалька, ${subtitle} закончился.` : `${isActive ? product : "Чего сидишь? Порадуй котэ, "}`}`;
    const buyName = `${disabled ? '' : `${isActive ? '' : 'купи.'}`}`;
    const disabledWrapper = `${disabled ? 'card__disable-wrapper' : ''}`


    return (
      <div className="element">
        <div className={cardClassName}
          onClick={this.handleClick}
          onMouseLeave={this.mouseLeave}
          onMouseEnter={this.mouseOver}>
          <div className={disabledWrapper}>
            <div className="card__background">
              <p className={overTitleName}>{this.state.overTitle}</p>
              <h2 className="card__title">{title}</h2>
              <p className="card__subtitle">{subtitle}</p>
              <p className="card__text"><span className="card__text card__text_bold">{portions}</span>{textPortions}</p>
              <p className="card__text"><span className="card__text card__text_bold">{mouse}</span>{textMouse}</p>
              <img className="card__image" src={logo} alt="Котик." />
              <div className={ovalClassName}>
                <p className="card__weight-number">{weight}</p>
                <p className="card__weight">кг</p>
              </div>
            </div>
          </div>
        </div >
        <p className={descriptionName}>{description}
          <span className="description description_bold"
            onClick={this.handleClick}>{buyName}</span>
        </p>
      </div>
    );
  }
}

export default Card;
