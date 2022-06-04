import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTopicPage from '../AddTopicPage/UploadTopicPage';

afterEach(() => {
    cleanup();
});

test('Should render AddMarkingPage component', () => {
   render(<AddTopicPage/>);
   const AddTopicPageElement = screen.getByTestId('AddTopicPage-1');
   expect( AddTopicPageElement).toBeInTheDocument();
});