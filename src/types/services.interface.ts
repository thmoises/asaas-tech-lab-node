export interface ServicesInterface {
    findAll(): Promise<unknown>;

    findById(id: number): Promise<unknown>;

    create(data: any): Promise<unknown>;

    update(data: any, id: number): Promise<boolean>;

    delete(id: number): Promise<void>;
}
