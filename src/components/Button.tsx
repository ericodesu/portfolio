import React from 'react';
import { CSSProperties } from 'react';

//Types
import { ComponentClickEvent, ComponentAsProp } from '../utils/types';

//Services
import { extractPropComponent } from '../utils/services';

/**
 * @description The default fill design consists on a simple full background.
 */
export type ButtonFillDesign = 'default' | 'diagonal-down' | 'diagonal-up';

/**
 * @description The default animation consists on a simple background ease-in-out transition.
 */
export type ButtonHoverAnimation = 'default' | 'slide-right' | 'slide-left' | 'slide-down' | 'slide-up';

export interface ButtonProps {
	wrapperComponentStyle?: CSSProperties;
	fillDesign?: ButtonFillDesign;
	fillComponentStyle?: CSSProperties;
	fillHoverAnimationType?: ButtonHoverAnimation;
	ContentComponent?: ComponentAsProp;
	onClick?: ComponentClickEvent;
}

const Button = ({
	wrapperComponentStyle,
	ContentComponent,
	fillComponentStyle,
	onClick,
	fillDesign = 'default',
	fillHoverAnimationType = 'default',
}: ButtonProps) => {
	return (
		<button
			className='button --rasterized-button --bg-color-ease-in --flex-center'
			onClick={onClick}
			style={wrapperComponentStyle}
			data-fill-design={fillDesign}
			data-hover-animation={fillHoverAnimationType}
		>
			<div className='button__content'>{extractPropComponent(ContentComponent)}</div>
			<div className='button__background --tranform-ease-in' style={fillComponentStyle} />
		</button>
	);
};

export default Button;