import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconHumidity, IconWind, IconSunrise, IconSunset } from '../../assets/icons';

export const Summary = ({}) => {
	return (
		<S.Wrapp>
			<S.Col>
				<S.InfoItem>
					<S.IconWrapp>
						<IconHumidity />
					</S.IconWrapp>
					<S.ValueWrapp>{} %</S.ValueWrapp>
				</S.InfoItem>
				<S.InfoItem>
					<S.IconWrapp>
						<IconWind />
					</S.IconWrapp>
					<S.ValueWrapp>{} m/sec</S.ValueWrapp>
				</S.InfoItem>
			</S.Col>
			<S.Col>
				<S.InfoItem>
					<S.ValueWrapp>{}</S.ValueWrapp>
					<S.IconWrapp>
						<IconSunrise />
					</S.IconWrapp>
				</S.InfoItem>
				<S.InfoItem>
					<S.ValueWrapp>{}</S.ValueWrapp>
					<S.IconWrapp>
						<IconSunset />
					</S.IconWrapp>
				</S.InfoItem>
			</S.Col>
		</S.Wrapp>
	);
};

Summary.propTypes = {};
