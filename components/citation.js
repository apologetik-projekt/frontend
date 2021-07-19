export default function Citation({quote, cite}){
 return (
	<div className="my-6 -mx-5 md:-mr-4" style={{fontSize: 17, filter: "sepia(0.05)"}}>
		<svg viewBox="0 0 400 16.5" xmlns="http://www.w3.org/2000/svg">
			<path className="text-gray-300 opacity-80"  fill="currentColor" d="M400.011 16.5l-400.037.025.03-8.374c.153-.015.398-.021.569-.021.237 0 .49.011.753.021.263.01.538.023.818.023a5.598 5.598 0 001.777-.247c.909-.42 1.874-.706 2.865-.852.096 0 .191.005.287.015.946.105 2.522.631 3.994.736a9.723 9.723 0 013.468.946c.996.543 2.054.965 3.151 1.255.089.016.18.024.271.023 1.1 0 2.429-1.074 4.564-1.074 2.312 0 4.939.526 5.57 1.156.517.517 1.1 1.528 2.053 1.528.236-.004.468-.059.68-.162a6.82 6.82 0 013.076-.86c.159 0 .324.006.5.019.455.036 1.016.071 1.6.071a5.369 5.369 0 003.13-.7 16.24 16.24 0 016.2-2.207 10.63 10.63 0 014.309.736 8.88 8.88 0 003.9.935c.489-.003.978-.034 1.464-.095 1.88-.26 3.773-.413 5.67-.458.884-.018 1.767.066 2.633.248 1.321.31 2.672.475 4.029.494a3.26 3.26 0 001.962-.389c.63-.631 1.051-1.471 1.681-1.576.63-.105 2.418-.105 3.153-.736a4.742 4.742 0 012.794-.8c.261-.002.522.02.779.065 1.225.178 2.462.268 3.7.267a7.743 7.743 0 001.872-.162c1.42-.602 2.932-.96 4.472-1.059.12 0 .24 0 .363.008 1.051.053 2.26.08 3.455.08a65.515 65.515 0 003.376-.08c1.181-.061 2.436-.233 3.481-.233a3.556 3.556 0 011.773.338 8.658 8.658 0 003.92 1.023 4.334 4.334 0 001.644-.286 25.099 25.099 0 017.415-1.629c.262-.003.523.015.783.052.901.134 1.812.197 2.724.191a28.943 28.943 0 004-.3c2.207-.315 3.258-1.156 5.36-1.261 1.309-.065 2.9-.212 4.428-.212.876-.013 1.751.058 2.614.212.735.213 1.484.375 2.241.486a5.587 5.587 0 001.437-.275 25.344 25.344 0 014.826-1.167c.078 0 .15 0 .219.01h.07c.475 0 1-.46 1.657-.921a4.31 4.31 0 012.5-.921c.203.001.405.018.606.051 2.523.42 3.994 1.681 5.676 2 1.514.284 3.967 1.848 5.822 1.848.198.001.395-.019.589-.061 1.891-.42 4.729-2.628 6.936-2.628s4.519 0 5.255 1.366c.736 1.366 1.261 2.943 3.573 3.573 2.617.76 5.309 1.23 8.029 1.4.248 0 .48-.008.694-.029a32.866 32.866 0 007.672-1.787 10.485 10.485 0 003.574-2.207 4.322 4.322 0 012.943-.965c.147 0 .288.006.42.019.938.113 1.882.176 2.828.191a8.394 8.394 0 002.427-.3c1.681-.525 3.573-1.787 5.254-2 1.681-.213 4.73-.105 6.412-.21 1.078-.067 2.2-.351 3.09-.351.435-.035.868.09 1.219.351.792.694 1.023 1.48 2.192 1.48.072 0 .145 0 .225-.008 1.366-.105 2.733-.526 4.1-.526 1.274 0 3.008-.641 4.771-.641.126 0 .253 0 .379.01 1.891.105 5.885.315 7.462.526a30.084 30.084 0 015.465 1.787c1.451.533 2.98.825 4.525.862.185 0 .359-.006.519-.021.1-.008.206-.013.313-.013.474.013.947.051 1.417.114.517.064 1.037.101 1.558.111.489.012.977-.059 1.442-.212a19.83 19.83 0 016.356-1.6c.2 0 .389.008.58.023 2.522.21 4.309.736 5.885.841.118.008.24.013.364.013 1.466-.06 2.91-.385 4.261-.958a16.865 16.865 0 014.834-1.261c.177-.011.353-.017.524-.017a5.772 5.772 0 013.155.752 5.863 5.863 0 002.732 1.892c1.142.246 2.1.933 3.2.933.343-.002.682-.07 1-.2 1.5-.6 3.2-1.583 4.988-1.583.088 0 .179 0 .267.006 1.087.061 2.657.191 4.057.191a7.99 7.99 0 002.564-.3c1.276-.49 5.484-2.447 8.175-2.447.183-.002.366.008.548.029 2.628.315 6.516 1.892 8.408 2 1.826.1 4.143 1.478 7.327 1.478.114 0 .229-.002.345-.006a22.097 22.097 0 006.831-.946 22.528 22.528 0 015.045-.841c.525 0 3.678-1.681 5.045-1.787.985-.076 2.081-.37 3.05-.37.356-.008.71.046 1.048.16 1.156.42 2.313 1.471 4.625 1.576.288.012.578.019.87.019.437 0 .874-.01 1.309-.023.435-.013.864-.021 1.289-.021a8.724 8.724 0 013.153.446 17.801 17.801 0 004.1 1.366c.681 0 1.364 1.715 2.881 1.715.126-.001.252-.012.377-.034 1.786-.315 2.312-2.312 3.993-2.732a24.55 24.55 0 014.967-1.036c.352-.017.703.052 1.024.2 1.118.612 1.942 2.108 3.613 2.108.057 0 .114 0 .17-.006 1.507-.088 3.09-.7 4.116-.7.172-.004.344.019.509.069.555.169 1.133.25 1.713.242a8.104 8.104 0 002.911-.557 9.991 9.991 0 013.483-.818c.422-.005.843.058 1.246.187.845.291 1.73.447 2.624.462a4.808 4.808 0 001.895-.357A11.801 11.801 0 01398.115 1a.739.739 0 01.547.193c.344.362.85.62 1.346.679l.003 14.628z" fillRule="evenodd"/>
		</svg>
		<div className="p-5 bg-gray-300 bg-opacity-80">
			<div className="prose md:text-justify" dangerouslySetInnerHTML={{ __html: quote}} />
			<span className="text-right block mt-1 italic"><strong className="font-semibold text-black block mt-2 text-opacity-75">{cite}</strong></span>
		</div>
		<svg viewBox="0 5 400 30" xmlns="http://www.w3.org/2000/svg">
			<path className="text-gray-300 opacity-80" fill="currentColor" d="M390.814 21.536a2.396 2.396 0 01-1.547-.513 6.087 6.087 0 00-3.43-1.243 1.916 1.916 0 00-.973.241 7.576 7.576 0 01-3.036.579c-.954.02-1.732-.097-1.695-.377.07-.496-1.021-1.131-1.55-1.12a.27.27 0 00-.258.123c-.115.224-.727.309-1.4.323-.572.01-1.146-.018-1.714-.084a5.365 5.365 0 00-.66-.017 16 16 0 00-3.95.541 5.804 5.804 0 01-1.88.282c-.41.01-.82-.004-1.231-.042h-.045c-.206.005-.387.21-.659.415a1.856 1.856 0 01-1.16.422 2.414 2.414 0 01-.36-.02 8.605 8.605 0 00-1.213-.08 1.9 1.9 0 00-1.442.536 2.511 2.511 0 01-1.655.52 4.963 4.963 0 01-.679-.034c-.637-.076-1.714-.515-1.81-.992-.096-.479-2.085-.429-2.208-.427a5.884 5.884 0 01-1.534.272 2.536 2.536 0 01-.761-.09 6.977 6.977 0 00-1.53-.43.585.585 0 00-.584.483c-.322.631-1 1.027-1.734 1.011a1.14 1.14 0 01-.805-.238 2.535 2.535 0 00-1.511-.605c-.213.004-.36.072-.38.22-.042.306-.594.553-1.13.564a1.273 1.273 0 01-.708-.168c-.598-.386-.676-1.012-1.091-1.528-.416-.514-2.055-.403-2.65-.787a1.256 1.256 0 00-.689-.23c-.343.03-.647.22-.81.51-.401.572-.898.664-2.099 1.14a5.693 5.693 0 01-1.945.389c-.45.016-.9-.04-1.328-.167-.775-.25-1.694-.672-1.93-1.319-.185-.51-.75-1.16-1.257-1.15a.563.563 0 00-.394.174 4.237 4.237 0 01-2.667 1.244 2.76 2.76 0 01-.89-.128c-1.553-.499-3.032-.37-3.428-1.037-.396-.668-.568-1.773-1.207-1.851h-.045c-.308.007-.675.44-1.044.878-.367.439-.736.87-1.045.876a.368.368 0 01-.047 0 5.067 5.067 0 01-2.365-1.68c-.253-.486-.372-.804-1.288-.785l-.16.003c-.905.019-1.19-.174-1.439-.652-.195-.378-1.08-.48-1.713-.467a3.198 3.198 0 00-.5.043 1.795 1.795 0 01-.292.024 21.459 21.459 0 01-2.282-.185c-.477-.06-2.51-.613-3.469-.729-.958-.115-1.776-.062-3.209-.236-1.158-.14-2.042-.756-2.969-.737a1.901 1.901 0 00-.678.138c-.547.22-1.13.34-1.721.352-.36.004-.718-.02-1.075-.07-.636-.077-2.235-.273-2.31-.9a2.029 2.029 0 00-.93-1.508c-.17-.06-.35-.084-.53-.07a8.596 8.596 0 00-.723.057c-.253.029-.505.055-.725.06-.1.002-.198 0-.298-.012a12.618 12.618 0 00-1.74-.125 3.101 3.101 0 00-.851.115c-.682.225-2.637.3-3.516.814a8.725 8.725 0 01-3.258.823c-.085.003-.172 0-.256-.01a19.008 19.008 0 01-2.49-.768 4.272 4.272 0 00-2.57-1.395 36.93 36.93 0 00-3.562-.494 1.078 1.078 0 00-.6.14.714.714 0 01-.43.131 9.037 9.037 0 01-2.4-.783 10.058 10.058 0 00-3.165-.668c-.163 0-.327.02-.484.066-.225.078-.462.12-.7.126a2.738 2.738 0 01-1.371-.379 2.406 2.406 0 00-1.116-.231c-.523.01-.982.173-1.02.439-.06.457-1.198.471-1.857.547l-.093.002c-.394-.016-.789-.05-1.18-.103-.49-.064-.983-.095-1.477-.098-.51.01-.907.1-1 .358-.132.37-.878.473-1.692.49-.367.007-.747-.004-1.093-.012-.344-.01-.652-.021-.875-.016l-.133.002c-.736.052-1.394.489-2.098.503a1.521 1.521 0 01-.235-.01 5.838 5.838 0 01-3.086-1.153 20.867 20.867 0 00-2.787-2.197 6.912 6.912 0 00-1.7-.318.97.97 0 00-.37.066c-.52.25-2.475.317-2.7.757-.203.404-2.366.839-3.059.853a.828.828 0 01-.132-.004c-.407-.05-1.19-.695-1.941-.68a1.15 1.15 0 00-.414.084c-.86.361-1.199.475-1.6 1.043-.402.572-1.795.091-2.557.927a7.217 7.217 0 01-3.118 1.482 10.92 10.92 0 01-2.708.57c-.098.006-.193 0-.289-.01l-3.19-.386a3.83 3.83 0 01-1.965.66 2.53 2.53 0 01-.39-.018 8.303 8.303 0 01-2.49-.768 3.144 3.144 0 00-1.057-.255.575.575 0 00-.58.366 2.779 2.779 0 01-1.975 1.154.698.698 0 01-.582-.227 4.783 4.783 0 00-2.542-1.235c-.131.003-.213.04-.226.125a.46.46 0 01-.52.445 2.892 2.892 0 01-.818-.146c-.937-.269-.634-1.315-1.746-1.447a20.178 20.178 0 00-2.481-.2 2.048 2.048 0 00-.753.122c-.996.378-2.046.606-3.115.675a3.058 3.058 0 01-.382-.014 1.975 1.975 0 00-.278-.016c-.34.021-.676.08-1.002.18a4.494 4.494 0 01-.996.178 1.666 1.666 0 01-.516-.066c-.936-.27-1.734-.367-1.81-.996-.05-.405-.723-.693-1.217-.683-.27.006-.488.104-.519.319-.081.608-1.306 1.234-1.842 1.63a6.157 6.157 0 01-2.8 1.037 2.03 2.03 0 01-.258-.01c-.955-.12-1.392-.483-1.429-1.412-.02-.515-.628-.632-1.256-.619a8.16 8.16 0 00-1.274.151c-.799.214-1.619.346-2.446.393a3.243 3.243 0 01-1.924-.46c-1.33-.933-2.373-.442-4.285-.674a8.501 8.501 0 00-1.205-.051c-.67.013-1.372.083-2.042.147-.672.066-1.314.133-1.873.145a5.51 5.51 0 01-.749-.029 4.615 4.615 0 01-3.202-1.473c-.635-.787-2.188-2.71-3.366-2.686a.955.955 0 00-.333.065 20.751 20.751 0 01-4.312.714 7.668 7.668 0 00-2.239.963 5.133 5.133 0 01-2.443.813 3.876 3.876 0 01-1.214-.172 6.143 6.143 0 00-1.882-.297 2.534 2.534 0 00-1.91.765c-.747.824-3.69 1.674-5.021 1.701l-.071.002c-.305-.001-.607-.001-.902.005a4.397 4.397 0 00-2.415.522c-.319.21-.698.314-1.083.3a13.441 13.441 0 01-1.85-.194 2.119 2.119 0 00-.266-.012 7.258 7.258 0 00-3.488 1.414 5.488 5.488 0 01-2.82 1.185 1.498 1.498 0 01-.26-.013 1.542 1.542 0 00-.203-.01 3.429 3.429 0 00-2.413 1.397c-.58.823-1.686 3.303-3.048 3.33a1.447 1.447 0 01-.16-.006 12.001 12.001 0 00-1.63-.073 5.858 5.858 0 00-2.985.591 12.274 12.274 0 01-5.724 1.718 5.87 5.87 0 01-.827-.04 8.93 8.93 0 01-5.079-2.007 4.834 4.834 0 00-3.03-1.611c-1.275-.154-3.112.244-3.006-.52.105-.763.088-1.844-.869-1.96a.53.53 0 00-.106-.008c-.906.018-1.59 1.695-1.881 2.703-.467 1.123-1.615 1.85-2.88 1.823a3.82 3.82 0 01-.523-.027c-1.657-.203-3.601.164-5.125-1.023a7.794 7.794 0 00-4.019-1.803c-.13 0-.257.02-.38.06a14.605 14.605 0 01-4.013.863 5.27 5.27 0 01-.732-.034l-3.727-.453c-1.657-.203-2.718-.13-4.089-.902-1.37-.772-2.847-.748-4.008-1.492a4.975 4.975 0 00-2.682-.856c-.35.004-.695.075-1.017.206-.958.4-2.129 1.218-3.083 1.238a1.377 1.377 0 01-.446-.062 15.178 15.178 0 00-4.439-1.116 2.894 2.894 0 00-.687.09c-1.53.419-3.863.538-5.16.782a34.61 34.61 0 00-4.123.905 12.2 12.2 0 01-3.136.458 18.65 18.65 0 01-2.591-.147 28.536 28.536 0 00-3.504-.474 3.16 3.16 0 00-1.315.286 5.469 5.469 0 01-2.241.558 4.22 4.22 0 01-1.389-.195 19.349 19.349 0 00-4.504-.95c-1.926-.232-2.816-.96-3.454-.947a.844.844 0 00-.69.437c-.539.767-1.187 1.614-1.896 1.628a1.251 1.251 0 01-.983-.572c-.934-1.155-2.579-2.845-3.48-2.826a.513.513 0 00-.368.146 3.31 3.31 0 01-2.312.872 5.346 5.346 0 01-.75-.037c-1.053-.128-2.935-1.944-3.82-1.926a.403.403 0 00-.37.212c-.55.936-1.332 2.047-2.188 2.146-.71.156-1.434.271-2.16.342a1.884 1.884 0 01-1.594-.604c-.683-.833-2.013-2.097-2.714-2.083-.231.005-.393.15-.44.495-.14 1.026-.98 2.082-1.774 2.098a.95.95 0 01-.774-.399c-.9-1.114-2.143-1.265-2.63-2.33-.488-1.063-.127-2.206-1.354-2.18h-.036c-1.212.045-1.49 3.14-2.216 3.154a.279.279 0 01-.103-.019c-.803-.3-.326-2.252-1.93-2.847a22.602 22.602 0 00-3.053-.776c-.276-.08-.56-.12-.847-.115-.849.017-1.38.486-.378 1.375.979.867.643 1.13-.107 1.145a6.996 6.996 0 01-.881-.058c-.06-.007-.12-.01-.181-.008-.451.01-.494.317-.536.624-.04.309-.083.619-.533.628a1.096 1.096 0 01-.181-.011c-1.018-.125-2.427-1.508-3.206-1.492a.463.463 0 00-.415.246c-.384.66-.858 1.208-1.506 1.222a1.7 1.7 0 01-.934-.311c-1.162-.746-3.053-.773-4.918-1a38.433 38.433 0 00-4.357-.713c-.614.012-1.045.183-1.107.65-.12.953-1.027 1.634-2.022 1.516a5.164 5.164 0 01-.705-.038c-1.245-.15-1.424-.375-2.559-1.318A5.922 5.922 0 00-38.95 9.83c-.277.006-.468.147-.514.488-.132.968-.642 1.623-1.487 1.64-.21 0-.42-.03-.62-.092-1.215-.35-.387-.249-1.963-1.045-.059-.017-.11-.045-.16-.068l-.204-11.608c.17-.02 443.716-.444 444.269-.392l-.083 20.466a6.043 6.043 0 01-.597.273 6.82 6.82 0 01-2.317.65 2.977 2.977 0 01-.837-.102 4.783 4.783 0 00-1.291-.146 3.722 3.722 0 00-2.363.784 3.319 3.319 0 01-2.068.857z" fillRule="evenodd"/>
		</svg>
	</div>
 )
}
