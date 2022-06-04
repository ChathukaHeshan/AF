import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddMarkingPage from '../AddMarkingPage/UploadMarkingPage';

afterEach(() => {
    cleanup();
});

test('Should render AddMarkingPage component', () => {
   render(<AddMarkingPage/>);
   const AddMarkingPageElement = screen.getByTestId('AddMarkingPage-1');
   expect( AddMarkingPageElement).toBeInTheDocument();
});