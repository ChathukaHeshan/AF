import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import UploadDocumentPage from '../AddDocumentPage/UploadDocumentPage';

afterEach(() => {
    cleanup();
});

test('Should render UploadDocumentPage component', () => {
   render(<UploadDocumentPage/>);
   const UploadDocumentPageElement = screen.getByTestId('uploadDocumentPage-1');
   expect( UploadDocumentPageElement).toBeInTheDocument();
});