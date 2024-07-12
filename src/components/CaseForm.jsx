import "./CaseForm.css";
import uploadImageIcon from "../assets/Upload-Image-Icon.png";

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
		<form className="case-form">
			<h1>Buat Laporan</h1>

			<div className="input-field upload-image">
				<img
					src={uploadImageIcon}
					alt="Upload image icon"
					style={{ width: "200px", height: "auto" }}
				/>
				<button type="button" id="upload-cover-btn">
					Unggah Sampul
				</button>
				<input type="file" id="cover-image" style={{ display: "none" }} />
			</div>

			<div className="input-field">
				<label htmlFor="case-title">Judul Laporan</label>
				<input type="text" id="case-title" />
			</div>

			<div style={{ width: "100%" }}>
				<p style={{ textAlign: "left" }}>Pilih satu kategori</p>
				<div className="category-select-container">
					<div className="top">
						<button type="button" className="category-btn">
							Salah Tagkap
						</button>
						<button type="button" className="category-btn">
							Hukum Pidana
						</button>
					</div>
					<div className="bottom">
						<button type="button" className="category-btn">
							Korupsi
						</button>
						<button type="button" className="category-btn">
							No Viral No Justice
						</button>
					</div>
				</div>
			</div>

			<div className="input-field">
				<label htmlFor="case-description">Masukkan deskripsi kasus ini</label>
				<textarea id="case-description" />
			</div>

			<div className="input-field">
				<label htmlFor="case-images">Masukkan bukti ataupun ilustrasi:</label>
				<input type="file" id="case-images" />
			</div>

			<div className="input-field">
				<label htmlFor="image-context">Berikan konteks untuk gambar</label>
				<textarea id="image-context" />
			</div>

			<div className="button-container">
				<button type="button" id="batalkan">
					Batalkan
				</button>
				<button type="submit" id="submit">
					Unggah
				</button>
			</div>
		</form>
	);
};
