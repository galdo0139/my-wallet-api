import { empty } from '../../../helpers';
import InvalidArgsTestError from '../../Errors/Database/InvalidArgsTestError';
import InvalidQueryTestError from '../../Errors/Database/InvalidQueryTestError';

function simpleQueryMock(query, args = [], queryIsWrong = false) {
    let validValues = true;
    args.forEach((value) => {
        if (empty(value)) {
            validValues = false;
        }
    });

    if (empty(query) || queryIsWrong) {
        throw new InvalidQueryTestError('DatabaseTestError');
    }

    if (!validValues) {
        throw new InvalidArgsTestError('DatabaseTestError');
    }

    return { rowCount: 1 };
}

function selectQueryMock(query, args = [], queryIsWrong = false) {
    let validValues = true;
    args.forEach((value) => {
        if (empty(value)) {
            validValues = false;
        }
    });

    if (empty(query) || queryIsWrong) {
        throw new InvalidQueryTestError('DatabaseTestError');
    }

    if (!validValues) {
        throw new InvalidArgsTestError('DatabaseTestError');
    }

    return { rows: [{ id: 1 }] };
}

export {
    simpleQueryMock,
    selectQueryMock,
};
