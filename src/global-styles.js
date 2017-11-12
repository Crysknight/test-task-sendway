import SputnikDisplayEot from './fonts/SputnikDisplay-Bold.eot';
import SputnikDisplayWoff from './fonts/SputnikDisplay-Bold.woff';
import SputnikDisplayTtf from './fonts/SputnikDisplay-Bold.ttf';

export default `

	@font-face {
	    font-family: 'SputnikDisplay';
	    src: url('${SputnikDisplayEot}');
	    src: url('${SputnikDisplayEot}?#iefix') format('embedded-opentype'),
	        url('${SputnikDisplayWoff}') format('woff'),
	        url('${SputnikDisplayTtf}') format('truetype');
	    font-weight: bold;
	    font-style: normal;
	}

	body,
	html {
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: Verdana;
		* {
			box-sizing: border-box;
		}
	}
	
`;