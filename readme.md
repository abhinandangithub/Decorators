Decorators in typescripts

In depth look into typescript implementation of decorators and 
how they make possible new exiting js features like reflection or dependency injection.

In typescript source code we can find the signature of available types of decorators:

declare type ClassDecorator = <TFunction extends Function> (target: TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T> (target: Object, propertyKey: string | symbol, description: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParamaterDecorator = (target: Object, propertyKey: string| symbol, paramaterIndex: number) => void; 


To Run: 
tsc
node dist/**/*.js