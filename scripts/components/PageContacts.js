import * as NavBar from './NavBar.js'
import * as SectionCoverCentralized from './SectionCoverCentralized.js'
import * as SectionMainContacts from './SectionMainContacts.js'
import * as SectionCards from './SectionCards.js'
import * as SectionRamais from './SectionRamais.js'
import * as Footer from './Footer.js'

window.onload = function(){
	NavBar.initComponent()

	SectionCoverCentralized.setComponentParameters(
		'./img/contatos.jpg',
		`
		<h1>CONTATE-NOS</h1>
		<h2>Envie-nos sua reclamação, sugestão, dúvida ou denúncia.</h2>
		`
	)
	SectionCoverCentralized.initComponent()

	SectionMainContacts.setComponentParameters(
			`<div class="contact_item">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.002 60.002"><path d="M59.002 37.992a6.701 6.701 0 01-6.693-6.693 1 1 0 10-2 0c0 4.794 3.899 8.693 8.693 8.693a1 1 0 100-2z"/><path d="M58.256 35.65a1 1 0 100-2c-.886 0-1.605-.72-1.605-1.605a1 1 0 10-2 0 3.608 3.608 0 003.605 3.605zM20.002 2.992a6.7 6.7 0 016.693 6.693 1 1 0 102 0c0-4.794-3.9-8.693-8.693-8.693a1 1 0 100 2z"/><path d="M19.748 6.334a1 1 0 001 1c.885 0 1.604.72 1.604 1.605a1 1 0 102 0 3.609 3.609 0 00-3.604-3.605 1 1 0 00-1 1zM44.076 37.889c-1.276-.728-2.597-.958-3.721-.646-.844.234-1.532.768-1.996 1.546-1.02 1.22-2.286 2.646-2.592 2.867-2.367 1.604-4.25 1.415-6.294-.629L17.987 29.542c-2.045-2.045-2.233-3.928-.631-6.291.224-.31 1.65-1.575 2.87-2.596.778-.464 1.312-1.152 1.546-1.996.311-1.123.082-2.444-.652-3.731-.173-.296-4.291-7.27-8.085-9.277a4.909 4.909 0 00-5.796.872L4.7 9.059C.686 13.073-.767 17.622.379 22.579c.956 4.132 3.742 8.529 8.282 13.068l14.705 14.706c5.762 5.762 11.258 8.656 16.298 8.656 3.701 0 7.157-1.562 10.291-4.695l2.537-2.537a4.907 4.907 0 00.872-5.796c-2.008-3.795-8.981-7.912-9.288-8.092zm7.002 12.474L48.541 52.9c-6.569 6.567-14.563 5.235-23.76-3.961L10.075 34.233c-4.271-4.271-6.877-8.344-7.747-12.104-.995-4.301.244-8.112 3.786-11.655l2.537-2.537a2.925 2.925 0 013.446-.518c3.293 1.743 7.256 8.454 7.29 8.511.449.787.62 1.608.457 2.196-.1.36-.324.634-.684.836l-.15.104c-.853.712-2.883 2.434-3.308 3.061-.612.904-1.018 1.792-1.231 2.665-.711-1.418-1.286-3.06-1.475-4.881a1.012 1.012 0 00-1.098-.892 1.002 1.002 0 00-.892 1.099c.722 6.953 6.129 11.479 6.359 11.668.025.02.054.028.08.045l10.613 10.613c.045.045.092.085.137.129.035.051.058.108.104.154.189.187 4.704 4.567 11.599 5.283a1.001 1.001 0 00.206-1.99c-2.114-.219-3.987-.839-5.548-1.558.765-.23 1.543-.612 2.332-1.146.628-.426 2.35-2.455 3.061-3.308l.104-.151c.202-.359.476-.583.836-.684.588-.159 1.409.008 2.186.45.067.04 6.778 4.003 8.521 7.296a2.916 2.916 0 01-.518 3.444z"/>
				</svg>
				<p>(17) 2137-9700</p>
			</div>
			<div class="contact_item">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path d="M26 0C11.663 0 0 11.663 0 26c0 4.891 1.359 9.639 3.937 13.762C2.91 43.36 1.055 50.166 1.035 50.237a.996.996 0 00.27.981c.263.253.643.343.989.237l10.306-3.17A25.936 25.936 0 0026 52c14.337 0 26-11.663 26-26S40.337 0 26 0zm0 50a23.94 23.94 0 01-12.731-3.651 1 1 0 00-.825-.108l-8.999 2.77a991.452 991.452 0 012.538-9.13c.08-.278.035-.578-.122-.821A23.907 23.907 0 012 26C2 12.767 12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/><path d="M42.985 32.126c-1.846-1.025-3.418-2.053-4.565-2.803-.876-.572-1.509-.985-1.973-1.218-1.297-.647-2.28-.19-2.654.188a1 1 0 00-.125.152c-1.347 2.021-3.106 3.954-3.621 4.058-.595-.093-3.38-1.676-6.148-3.981-2.826-2.355-4.604-4.61-4.865-6.146C20.847 20.51 21.5 19.336 21.5 18c0-1.377-3.212-7.126-3.793-7.707-.583-.582-1.896-.673-3.903-.273a1.01 1.01 0 00-.511.273c-.243.243-5.929 6.04-3.227 13.066 2.966 7.711 10.579 16.674 20.285 18.13 1.103.165 2.137.247 3.105.247 5.71 0 9.08-2.873 10.029-8.572a.996.996 0 00-.5-1.038zm-12.337 7.385c-10.264-1.539-16.729-11.708-18.715-16.87-1.97-5.12 1.663-9.685 2.575-10.717.742-.126 1.523-.179 1.849-.128.681.947 3.039 5.402 3.143 6.204 0 .525-.171 1.256-2.207 3.293A.996.996 0 0017 22c0 5.236 11.044 12.5 13 12.5 1.701 0 3.919-2.859 5.182-4.722a.949.949 0 01.371.116c.36.181.984.588 1.773 1.104 1.042.681 2.426 1.585 4.06 2.522-.742 3.57-2.816 7.181-10.738 5.991z"/></svg>
				<p>(17) 99673-0267</p>
			</div>
			<div class="contact_item">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M63.94 39.721l-3.956-22.388a3.856 3.856 0 00-4.464-3.125l-31.726 5.606c-1.97.348-3.308 2.148-3.15 4.102-.022.162 3.983 22.751 3.983 22.751a3.821 3.821 0 001.586 2.488 3.827 3.827 0 002.879.636l31.723-5.605a3.825 3.825 0 002.488-1.586c.59-.843.816-1.865.637-2.879zm-2.672-3.636L50.6 27.879c3.002-3.233 6.137-6.785 7.702-8.572l2.965 16.778zM24.143 21.783l31.724-5.606a1.855 1.855 0 011.839.772c-.932 1.072-9.375 10.756-13.433 14.56a3.537 3.537 0 01-3.918.631c-4.79-2.213-15.22-7.446-17.727-8.707a1.84 1.84 0 011.515-1.65zm-1.165 4.064c2.35 1.178 6.616 3.31 10.513 5.218l-7.523 11.702-2.99-16.92zm38.686 15.606a1.838 1.838 0 01-1.195.763l-31.725 5.607a1.851 1.851 0 01-1.386-.308 1.84 1.84 0 01-.762-1.195l-.115-.652 8.82-13.72c1.602.777 3.069 1.479 4.215 2.008a5.529 5.529 0 006.124-.99c1.005-.94 2.255-2.214 3.586-3.62l12.558 9.66.188 1.063c.086.487-.024.98-.308 1.384zM19.008 29.867a.997.997 0 00-1.158-.81L.826 32.065a.999.999 0 10.348 1.969l17.023-3.008a.999.999 0 00.81-1.159zM20.03 35.652a.998.998 0 00-1.159-.81L8.657 36.645a.999.999 0 10.348 1.969l10.214-1.805a.999.999 0 00.81-1.158zM19.888 40.597L13.079 41.8a.999.999 0 10.348 1.969l6.808-1.203a.999.999 0 00.81-1.158.996.996 0 00-1.157-.811z"/></svg>
				<p>contato@sindicatocondutores.com.br</p>
			</div>`,
			`<a href="#">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z" stroke="white" stroke-width="4"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3147 37H20.4372V25.4985H18V21.5355H20.4372V19.1563C20.4372 15.9234 21.8127 14 25.723 14H28.9776V17.9645H26.9435C25.4213 17.9645 25.3207 18.5183 25.3207 19.5518L25.314 21.5355H29L28.5686 25.4985H25.314V37H25.3147Z" fill="white"/>
				</svg>
			</a>
			<a href="#">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z" stroke="white" stroke-width="4"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14.982C26.9371 14.982 27.285 14.9932 28.4449 15.0461C29.5174 15.0951 30.0998 15.2743 30.4875 15.4249C31.0009 15.6244 31.3674 15.8628 31.7523 16.2477C32.1372 16.6326 32.3756 16.9991 32.5751 17.5125C32.7257 17.9002 32.9049 18.4826 32.9539 19.5551C33.0068 20.715 33.018 21.0629 33.018 24C33.018 26.9372 33.0068 27.285 32.9539 28.4449C32.9049 29.5174 32.7257 30.0999 32.5751 30.4875C32.3756 31.0009 32.1372 31.3674 31.7523 31.7523C31.3674 32.1372 31.0009 32.3756 30.4875 32.5751C30.0998 32.7258 29.5174 32.905 28.4449 32.9539C27.2852 33.0068 26.9373 33.018 24 33.018C21.0627 33.018 20.7148 33.0068 19.5551 32.9539C18.4826 32.905 17.9001 32.7258 17.5125 32.5751C16.9991 32.3756 16.6326 32.1372 16.2477 31.7523C15.8628 31.3674 15.6244 31.0009 15.4249 30.4875C15.2742 30.0999 15.095 29.5174 15.0461 28.445C14.9932 27.285 14.982 26.9372 14.982 24C14.982 21.0629 14.9932 20.715 15.0461 19.5551C15.095 18.4826 15.2742 17.9002 15.4249 17.5125C15.6244 16.9991 15.8628 16.6326 16.2477 16.2477C16.6326 15.8628 16.9991 15.6244 17.5125 15.4249C17.9001 15.2743 18.4826 15.0951 19.555 15.0461C20.715 14.9932 21.0628 14.982 24 14.982ZM24 13C21.0125 13 20.638 13.0127 19.4647 13.0662C18.2938 13.1196 17.4943 13.3056 16.7945 13.5775C16.0712 13.8586 15.4577 14.2347 14.8462 14.8463C14.2347 15.4578 13.8586 16.0712 13.5775 16.7946C13.3055 17.4943 13.1196 18.2939 13.0662 19.4648C13.0126 20.638 13 21.0126 13 24C13 26.9875 13.0126 27.3621 13.0662 28.5353C13.1196 29.7062 13.3055 30.5057 13.5775 31.2055C13.8586 31.9288 14.2347 32.5423 14.8462 33.1538C15.4577 33.7653 16.0712 34.1414 16.7945 34.4225C17.4943 34.6945 18.2938 34.8804 19.4647 34.9338C20.638 34.9874 21.0125 35 24 35C26.9874 35 27.362 34.9874 28.5352 34.9338C29.7061 34.8804 30.5057 34.6945 31.2054 34.4225C31.9288 34.1414 32.5422 33.7653 33.1537 33.1538C33.7653 32.5423 34.1414 31.9288 34.4225 31.2055C34.6944 30.5057 34.8804 29.7062 34.9338 28.5353C34.9873 27.3621 35 26.9875 35 24C35 21.0126 34.9873 20.638 34.9338 19.4648C34.8804 18.2939 34.6944 17.4943 34.4225 16.7946C34.1414 16.0712 33.7653 15.4578 33.1537 14.8463C32.5422 14.2347 31.9288 13.8586 31.2054 13.5775C30.5057 13.3056 29.7061 13.1196 28.5352 13.0662C27.362 13.0127 26.9874 13 24 13ZM24.0218 18.369C20.8999 18.369 18.369 20.8999 18.369 24.0218C18.369 27.1438 20.8999 29.6746 24.0218 29.6746C27.1438 29.6746 29.6746 27.1438 29.6746 24.0218C29.6746 20.8999 27.1438 18.369 24.0218 18.369ZM24.0218 27.6912C21.9953 27.6912 20.3525 26.0483 20.3525 24.0218C20.3525 21.9953 21.9953 20.3525 24.0218 20.3525C26.0483 20.3525 27.6912 21.9953 27.6912 24.0218C27.6912 26.0483 26.0483 27.6912 24.0218 27.6912ZM31.1587 18.1071C31.1587 18.8304 30.5725 19.4167 29.8492 19.4167C29.126 19.4167 28.5397 18.8304 28.5397 18.1071C28.5397 17.3839 29.126 16.7976 29.8492 16.7976C30.5725 16.7976 31.1587 17.3839 31.1587 18.1071Z" fill="white"/>
				</svg>
			</a>
			<a href="#">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z" stroke="white" stroke-width="4"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5261 18.8457C33.4161 18.2841 34.099 17.3936 34.4194 16.3328C33.5862 16.8541 32.6654 17.2311 31.683 17.4352C30.8991 16.5512 29.7787 16 28.5387 16C26.1597 16 24.2319 18.0345 24.2319 20.5436C24.2319 20.8998 24.2677 21.2469 24.3416 21.5784C20.7621 21.3886 17.5881 19.5815 15.4619 16.8307C15.0909 17.5041 14.8789 18.2841 14.8789 19.1161C14.8789 20.6918 15.6394 22.0828 16.7956 22.8992C16.0893 22.8758 15.4249 22.6691 14.8431 22.3311V22.387C14.8431 24.5892 16.3272 26.4261 18.3006 26.8421C17.9382 26.9487 17.5585 27.002 17.1641 27.002C16.8868 27.002 16.6156 26.9747 16.3543 26.9214C16.9016 28.7258 18.4929 30.0415 20.3788 30.0766C18.9033 31.296 17.0458 32.0214 15.028 32.0214C14.6804 32.0214 14.3365 32.0019 14 31.959C15.9068 33.2473 18.1712 34 20.6043 34C28.53 34 32.8614 27.0761 32.8614 21.0714C32.8614 20.8738 32.859 20.6775 32.8503 20.4837C33.6922 19.8428 34.4244 19.042 35 18.1307C34.2272 18.4921 33.3964 18.7365 32.5261 18.8457Z" fill="white"/>
				</svg>
			</a>
			<a href="#">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z" stroke="white" stroke-width="4"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M34 27.5642V20.4358C34 20.4358 34 17 30.5534 17H17.4454C17.4454 17 14 17 14 20.4358V27.5642C14 27.5642 14 31 17.4454 31H30.5534C30.5534 31 34 31 34 27.5642ZM27.8829 24.01L21.3354 27.8432V20.1756L27.8829 24.01Z" fill="white"/>
				</svg>
			</a>`,
			``
	)
	SectionMainContacts.initComponent()

	SectionCards.setComponentParameters(
			`<div class="card_layout_location_sede">
				<svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.666 368.666"><path d="M184.333 0C102.01 0 35.036 66.974 35.036 149.297c0 33.968 11.132 65.959 32.193 92.515 27.27 34.383 106.571 116.021 109.934 119.479l7.17 7.375 7.17-7.374c3.363-3.459 82.688-85.116 109.963-119.51 21.042-26.534 32.164-58.515 32.164-92.485C333.63 66.974 266.655 0 184.333 0zm101.463 229.355c-21.957 27.687-80.921 89.278-101.463 110.581-20.54-21.302-79.482-82.875-101.434-110.552-18.229-22.984-27.863-50.677-27.863-80.087C55.036 78.002 113.038 20 184.333 20S313.63 78.002 313.63 149.297c0 29.411-9.625 57.095-27.834 80.058z"/><path d="M211.022 115.646l-26.689-53.841-26.689 53.841-57.325 6.604 40.577 41.755-11.794 58.616 55.231-30.22 55.231 30.22-11.794-58.616 40.577-41.755-57.325-6.604zm.463 68.814l-27.152-14.856-27.153 14.856 5.4-26.837-19.589-20.157 27.741-3.196 13.6-27.434 13.6 27.434 27.741 3.196-19.589 20.157 5.401 26.837z"/></svg>
				<h3>São José do Rio Preto<br>SP</h3>
				<p>Rua da Saudade, nº 485<br>Vila Ercília - Cep: 15013-090<br>Telefone: (17) 3295-1770</p>
			</div>
			<div class="card_layout_location">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.582 491.582">
				<path d="M245.791 0C153.799 0 78.957 74.841 78.957 166.833c0 36.967 21.764 93.187 68.493 176.926 31.887 57.138 63.627 105.4 64.966 107.433l22.941 34.773a12.497 12.497 0 0020.868 0l22.94-34.771c1.326-2.01 32.835-49.855 64.967-107.435 46.729-83.735 68.493-139.955 68.493-176.926C412.625 74.841 337.783 0 245.791 0zm76.511 331.576c-31.685 56.775-62.696 103.869-64.003 105.848l-12.508 18.959-12.504-18.954c-1.314-1.995-32.563-49.511-64.007-105.853-43.345-77.676-65.323-133.104-65.323-164.743C103.957 88.626 167.583 25 245.791 25s141.834 63.626 141.834 141.833c0 31.643-21.978 87.069-65.323 164.743z"/><path d="M245.791 73.291c-51.005 0-92.5 41.496-92.5 92.5s41.495 92.5 92.5 92.5 92.5-41.496 92.5-92.5-41.495-92.5-92.5-92.5zm0 160c-37.22 0-67.5-30.28-67.5-67.5s30.28-67.5 67.5-67.5c37.221 0 67.5 30.28 67.5 67.5s-30.279 67.5-67.5 67.5z"/>
			</svg>
				<h3>Catanduva<br>SP</h3>
				<p>Rua Aracaju, nº 485<br>Telefone: (17) 3522-0841</p>
			</div>
			<div class="card_layout_location">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.582 491.582">
				<path d="M245.791 0C153.799 0 78.957 74.841 78.957 166.833c0 36.967 21.764 93.187 68.493 176.926 31.887 57.138 63.627 105.4 64.966 107.433l22.941 34.773a12.497 12.497 0 0020.868 0l22.94-34.771c1.326-2.01 32.835-49.855 64.967-107.435 46.729-83.735 68.493-139.955 68.493-176.926C412.625 74.841 337.783 0 245.791 0zm76.511 331.576c-31.685 56.775-62.696 103.869-64.003 105.848l-12.508 18.959-12.504-18.954c-1.314-1.995-32.563-49.511-64.007-105.853-43.345-77.676-65.323-133.104-65.323-164.743C103.957 88.626 167.583 25 245.791 25s141.834 63.626 141.834 141.833c0 31.643-21.978 87.069-65.323 164.743z"/><path d="M245.791 73.291c-51.005 0-92.5 41.496-92.5 92.5s41.495 92.5 92.5 92.5 92.5-41.496 92.5-92.5-41.495-92.5-92.5-92.5zm0 160c-37.22 0-67.5-30.28-67.5-67.5s30.28-67.5 67.5-67.5c37.221 0 67.5 30.28 67.5 67.5s-30.279 67.5-67.5 67.5z"/>
			</svg>
				<h3>José Bonifácio<br>SP</h3>
				<p>Rua Dom Pedro II, nº 133<br>Telefone: (17) 3245-4775</p>
			</div>
			<div class="card_layout_location">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.582 491.582">
				<path d="M245.791 0C153.799 0 78.957 74.841 78.957 166.833c0 36.967 21.764 93.187 68.493 176.926 31.887 57.138 63.627 105.4 64.966 107.433l22.941 34.773a12.497 12.497 0 0020.868 0l22.94-34.771c1.326-2.01 32.835-49.855 64.967-107.435 46.729-83.735 68.493-139.955 68.493-176.926C412.625 74.841 337.783 0 245.791 0zm76.511 331.576c-31.685 56.775-62.696 103.869-64.003 105.848l-12.508 18.959-12.504-18.954c-1.314-1.995-32.563-49.511-64.007-105.853-43.345-77.676-65.323-133.104-65.323-164.743C103.957 88.626 167.583 25 245.791 25s141.834 63.626 141.834 141.833c0 31.643-21.978 87.069-65.323 164.743z"/><path d="M245.791 73.291c-51.005 0-92.5 41.496-92.5 92.5s41.495 92.5 92.5 92.5 92.5-41.496 92.5-92.5-41.495-92.5-92.5-92.5zm0 160c-37.22 0-67.5-30.28-67.5-67.5s30.28-67.5 67.5-67.5c37.221 0 67.5 30.28 67.5 67.5s-30.279 67.5-67.5 67.5z"/>
			</svg>
				<h3>Monte Aprazível<br>SP</h3>
				<p>Rua da Saudade, nº 485<br>Telefone: (17) 3295-1770</p>
			</div>
			<div class="card_layout_location">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.582 491.582">
				<path d="M245.791 0C153.799 0 78.957 74.841 78.957 166.833c0 36.967 21.764 93.187 68.493 176.926 31.887 57.138 63.627 105.4 64.966 107.433l22.941 34.773a12.497 12.497 0 0020.868 0l22.94-34.771c1.326-2.01 32.835-49.855 64.967-107.435 46.729-83.735 68.493-139.955 68.493-176.926C412.625 74.841 337.783 0 245.791 0zm76.511 331.576c-31.685 56.775-62.696 103.869-64.003 105.848l-12.508 18.959-12.504-18.954c-1.314-1.995-32.563-49.511-64.007-105.853-43.345-77.676-65.323-133.104-65.323-164.743C103.957 88.626 167.583 25 245.791 25s141.834 63.626 141.834 141.833c0 31.643-21.978 87.069-65.323 164.743z"/><path d="M245.791 73.291c-51.005 0-92.5 41.496-92.5 92.5s41.495 92.5 92.5 92.5 92.5-41.496 92.5-92.5-41.495-92.5-92.5-92.5zm0 160c-37.22 0-67.5-30.28-67.5-67.5s30.28-67.5 67.5-67.5c37.221 0 67.5 30.28 67.5 67.5s-30.279 67.5-67.5 67.5z"/>
			</svg>
				<h3>Orindiúva<br>SP</h3>
				<p>Rua Ver. Osvaldo Kushida, nº 640<br>Telefone: (17) 3816-1144</p>
			</div>`,
			`<h1>Localização</h1>
			<h2>Visite-nos em nossa sede e subsedes na região de S. J. do Rio Preto - SP</h2>`,
			`./img/localizacao.jpg`
	)
	SectionCards.initComponent()

	SectionRamais.setComponentParameters(
			`
				<div class="ramal_item">
					<div class="ramal_head">
						710
					</div>
					<div class="ramal_body">
						Saúde<br>
						>> Marcar consultas;<br>
						>> Consultar especialidades.
					</div>
				</div>

				<div class="ramal_item">
					<div class="ramal_head">
						720
					</div>
					<div class="ramal_body">
						Caixa<br>
						Referente aos pagamentos da contribuição.
					</div>
				</div>

				<div class="ramal_item">
					<div class="ramal_head">
						716<br>----<br>740
					</div>
					<div class="ramal_body">
						Agentes sindicais
					</div>
				</div>
			`,
			`<h1>RAMAIS</h1>
			<h2>Para falar diretamente com um departamento, basta ligar para o nosso telefone: (17) 2137-9700 e, em seguida, digitar o ramal desejado</h2>`,
			`./img/ramal.jpg`
	)
	SectionRamais.initComponent()

	Footer.initComponent()
}