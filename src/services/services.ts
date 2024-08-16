import dataSource from '../models';
import {ServicesInterface} from "../types/services.interface";
import {ErrorTypesEnum} from "../enums/error-types-enum";

class Services implements ServicesInterface {
    private model: string;

    constructor(moduleName: string) {
        this.model = moduleName;
    }

    async findAll() {
        return dataSource[this.model].findAll();
    }

    async findById(id: number) {
        return dataSource[this.model].findByPk(id);
    }

    async create(data: Record<string, unknown>) {
        return dataSource[this.model].create(data);
    }

    async update(data: Record<string, unknown>, id: number) {
        const record = await dataSource[this.model].findByPk(id);
        if (!record) {
            throw new Error(ErrorTypesEnum.NOT_FOUND);
        }

        const response = await dataSource[this.model].update(data, {
            where: { id: id }
        });

        return response[0] !== 0;
    }

    async delete(id: number) {
        const record = await dataSource[this.model].findByPk(id);
        if (!record) {
            throw new Error(ErrorTypesEnum.NOT_FOUND);
        }

        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

export default Services;
