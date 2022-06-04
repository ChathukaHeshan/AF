import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddSchemePage from '../AddSchemePage/UploadSchemePage';

afterEach(() => {
    cleanup();
});

test('Should render AddSchemePage component', () => {
   render(<AddSchemePage/>);
   const AddSchemePageElement = screen.getByTestId('addSchemePage-1');
   expect( AddSchemePageElement).toBeInTheDocument();
});