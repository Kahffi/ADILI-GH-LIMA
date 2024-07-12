class Case {
	constructor(caseTitle, caseId, uploader, caseDescription, caseImages) {
		this.caseTitle = caseTitle;
		this.caseId = caseId;
		this.uploader = uploader;
		this.caseDescription = caseDescription;
		this.caseImages = caseImages;
	}
	getCaseTitle() {
		return this.caseTitle;
	}
	getCaseID() {
		return this.caseId;
	}
	getUploader() {
		return this.uploader;
	}
	getCaseDescription() {
		return this.caseDescription;
	}
	getCaseImages() {
		return this.caseImages;
	}
}
export const CaseForm = () => {
	return (
		<div className="case-form-container">
			<form action="case-form">
				<div className="input-field">
					<label htmlFor="case-title">Masukkan judul kasus</label>
					<input type="text" id="case-title" />
				</div>

				<div className="input-field">
					<label htmlFor="case-description">Masukkan deskripsi kasus ini</label>
					<input type="text" id="case-description" />
				</div>

				<div className="input-field">
					<label htmlFor="case-images">Masukkan bukti ataupun ilustrasi:</label>
					<input type="file" id="case-images" />
				</div>

				<div className="input-field">
					<label htmlFor="image-context">Berikan konteks untuk gambar</label>
					<input type="file" id="image-context" />
				</div>
			</form>
		</div>
	);
};
