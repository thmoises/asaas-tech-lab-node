export interface ServicesInterface {
    findAll(): Promise<unknown>;

    findById(id: number): Promise<unknown>;

    create(data: Record<string, unknown>): Promise<unknown>;

    update(data: Record<string, unknown>, id: number): Promise<boolean>;

    delete(id: number): Promise<void>;
}
