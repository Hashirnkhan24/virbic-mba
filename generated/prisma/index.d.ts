
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StressLevel: {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High',
  VeryHigh: 'VeryHigh'
};

export type StressLevel = (typeof StressLevel)[keyof typeof StressLevel]


export const TravelFrequency: {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High'
};

export type TravelFrequency = (typeof TravelFrequency)[keyof typeof TravelFrequency]

}

export type StressLevel = $Enums.StressLevel

export const StressLevel: typeof $Enums.StressLevel

export type TravelFrequency = $Enums.TravelFrequency

export const TravelFrequency: typeof $Enums.TravelFrequency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    communication: number | null
    analyticalAbility: number | null
    leadership: number | null
    negotiation: number | null
    stakeholderManagement: number | null
    attentionToDetail: number | null
    personalityAnalytical: number | null
    personalityCreative: number | null
    personalityStructured: number | null
    personalityRiskAppetite: number | null
    personalityPeopleInteraction: number | null
    personalityFieldWork: number | null
    personalityPressureLevel: number | null
    avgEntrySalaryTier1: number | null
    avgEntrySalaryTier2: number | null
    futureRelevanceScore: number | null
    switchability: number | null
    brandValue: number | null
    learningCurveDifficulty: number | null
    entryBarrier: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    communication: number | null
    analyticalAbility: number | null
    leadership: number | null
    negotiation: number | null
    stakeholderManagement: number | null
    attentionToDetail: number | null
    personalityAnalytical: number | null
    personalityCreative: number | null
    personalityStructured: number | null
    personalityRiskAppetite: number | null
    personalityPeopleInteraction: number | null
    personalityFieldWork: number | null
    personalityPressureLevel: number | null
    avgEntrySalaryTier1: number | null
    avgEntrySalaryTier2: number | null
    futureRelevanceScore: number | null
    switchability: number | null
    brandValue: number | null
    learningCurveDifficulty: number | null
    entryBarrier: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    roleId: string | null
    name: string | null
    slug: string | null
    specialization: string | null
    roleLevel: string | null
    shortDescription: string | null
    whatThisRoleDoes: string | null
    whyCompaniesHire: string | null
    communication: number | null
    analyticalAbility: number | null
    leadership: number | null
    negotiation: number | null
    stakeholderManagement: number | null
    attentionToDetail: number | null
    personalityAnalytical: number | null
    personalityCreative: number | null
    personalityStructured: number | null
    personalityRiskAppetite: number | null
    personalityPeopleInteraction: number | null
    personalityFieldWork: number | null
    personalityPressureLevel: number | null
    years0_2_Title: string | null
    years0_2_Salary: string | null
    years3_5_Title: string | null
    years3_5_Salary: string | null
    years6_10_Title: string | null
    years6_10_Salary: string | null
    years10_plus_Title: string | null
    years10_plus_Salary: string | null
    avgEntrySalaryTier1: number | null
    avgEntrySalaryTier2: number | null
    growthSpeed: string | null
    averageWorkHoursPerWeek: string | null
    travelFrequency: $Enums.TravelFrequency | null
    weekendWorkLikelihood: string | null
    stressLevel: $Enums.StressLevel | null
    growthTrend: string | null
    automationRisk: string | null
    futureRelevanceScore: number | null
    switchability: number | null
    brandValue: number | null
    learningCurveDifficulty: number | null
    entryBarrier: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    roleId: string | null
    name: string | null
    slug: string | null
    specialization: string | null
    roleLevel: string | null
    shortDescription: string | null
    whatThisRoleDoes: string | null
    whyCompaniesHire: string | null
    communication: number | null
    analyticalAbility: number | null
    leadership: number | null
    negotiation: number | null
    stakeholderManagement: number | null
    attentionToDetail: number | null
    personalityAnalytical: number | null
    personalityCreative: number | null
    personalityStructured: number | null
    personalityRiskAppetite: number | null
    personalityPeopleInteraction: number | null
    personalityFieldWork: number | null
    personalityPressureLevel: number | null
    years0_2_Title: string | null
    years0_2_Salary: string | null
    years3_5_Title: string | null
    years3_5_Salary: string | null
    years6_10_Title: string | null
    years6_10_Salary: string | null
    years10_plus_Title: string | null
    years10_plus_Salary: string | null
    avgEntrySalaryTier1: number | null
    avgEntrySalaryTier2: number | null
    growthSpeed: string | null
    averageWorkHoursPerWeek: string | null
    travelFrequency: $Enums.TravelFrequency | null
    weekendWorkLikelihood: string | null
    stressLevel: $Enums.StressLevel | null
    growthTrend: string | null
    automationRisk: string | null
    futureRelevanceScore: number | null
    switchability: number | null
    brandValue: number | null
    learningCurveDifficulty: number | null
    entryBarrier: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    roleId: number
    name: number
    slug: number
    specialization: number
    sector: number
    roleLevel: number
    shortDescription: number
    whatThisRoleDoes: number
    whyCompaniesHire: number
    responsibilities: number
    kpis: number
    technicalSkills: number
    toolsUsed: number
    certifications: number
    communication: number
    analyticalAbility: number
    leadership: number
    negotiation: number
    stakeholderManagement: number
    attentionToDetail: number
    personalityAnalytical: number
    personalityCreative: number
    personalityStructured: number
    personalityRiskAppetite: number
    personalityPeopleInteraction: number
    personalityFieldWork: number
    personalityPressureLevel: number
    careerProgression: number
    salaryProgression: number
    years0_2_Title: number
    years0_2_Salary: number
    years3_5_Title: number
    years3_5_Salary: number
    years6_10_Title: number
    years6_10_Salary: number
    years10_plus_Title: number
    years10_plus_Salary: number
    avgEntrySalaryTier1: number
    avgEntrySalaryTier2: number
    growthSpeed: number
    averageWorkHoursPerWeek: number
    travelFrequency: number
    weekendWorkLikelihood: number
    stressLevel: number
    growthTrend: number
    automationRisk: number
    futureRelevanceScore: number
    top5Companies: number
    suitsYouIf: number
    avoidIf: number
    switchability: number
    brandValue: number
    learningCurveDifficulty: number
    entryBarrier: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    communication?: true
    analyticalAbility?: true
    leadership?: true
    negotiation?: true
    stakeholderManagement?: true
    attentionToDetail?: true
    personalityAnalytical?: true
    personalityCreative?: true
    personalityStructured?: true
    personalityRiskAppetite?: true
    personalityPeopleInteraction?: true
    personalityFieldWork?: true
    personalityPressureLevel?: true
    avgEntrySalaryTier1?: true
    avgEntrySalaryTier2?: true
    futureRelevanceScore?: true
    switchability?: true
    brandValue?: true
    learningCurveDifficulty?: true
    entryBarrier?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    communication?: true
    analyticalAbility?: true
    leadership?: true
    negotiation?: true
    stakeholderManagement?: true
    attentionToDetail?: true
    personalityAnalytical?: true
    personalityCreative?: true
    personalityStructured?: true
    personalityRiskAppetite?: true
    personalityPeopleInteraction?: true
    personalityFieldWork?: true
    personalityPressureLevel?: true
    avgEntrySalaryTier1?: true
    avgEntrySalaryTier2?: true
    futureRelevanceScore?: true
    switchability?: true
    brandValue?: true
    learningCurveDifficulty?: true
    entryBarrier?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    slug?: true
    specialization?: true
    roleLevel?: true
    shortDescription?: true
    whatThisRoleDoes?: true
    whyCompaniesHire?: true
    communication?: true
    analyticalAbility?: true
    leadership?: true
    negotiation?: true
    stakeholderManagement?: true
    attentionToDetail?: true
    personalityAnalytical?: true
    personalityCreative?: true
    personalityStructured?: true
    personalityRiskAppetite?: true
    personalityPeopleInteraction?: true
    personalityFieldWork?: true
    personalityPressureLevel?: true
    years0_2_Title?: true
    years0_2_Salary?: true
    years3_5_Title?: true
    years3_5_Salary?: true
    years6_10_Title?: true
    years6_10_Salary?: true
    years10_plus_Title?: true
    years10_plus_Salary?: true
    avgEntrySalaryTier1?: true
    avgEntrySalaryTier2?: true
    growthSpeed?: true
    averageWorkHoursPerWeek?: true
    travelFrequency?: true
    weekendWorkLikelihood?: true
    stressLevel?: true
    growthTrend?: true
    automationRisk?: true
    futureRelevanceScore?: true
    switchability?: true
    brandValue?: true
    learningCurveDifficulty?: true
    entryBarrier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    slug?: true
    specialization?: true
    roleLevel?: true
    shortDescription?: true
    whatThisRoleDoes?: true
    whyCompaniesHire?: true
    communication?: true
    analyticalAbility?: true
    leadership?: true
    negotiation?: true
    stakeholderManagement?: true
    attentionToDetail?: true
    personalityAnalytical?: true
    personalityCreative?: true
    personalityStructured?: true
    personalityRiskAppetite?: true
    personalityPeopleInteraction?: true
    personalityFieldWork?: true
    personalityPressureLevel?: true
    years0_2_Title?: true
    years0_2_Salary?: true
    years3_5_Title?: true
    years3_5_Salary?: true
    years6_10_Title?: true
    years6_10_Salary?: true
    years10_plus_Title?: true
    years10_plus_Salary?: true
    avgEntrySalaryTier1?: true
    avgEntrySalaryTier2?: true
    growthSpeed?: true
    averageWorkHoursPerWeek?: true
    travelFrequency?: true
    weekendWorkLikelihood?: true
    stressLevel?: true
    growthTrend?: true
    automationRisk?: true
    futureRelevanceScore?: true
    switchability?: true
    brandValue?: true
    learningCurveDifficulty?: true
    entryBarrier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    slug?: true
    specialization?: true
    sector?: true
    roleLevel?: true
    shortDescription?: true
    whatThisRoleDoes?: true
    whyCompaniesHire?: true
    responsibilities?: true
    kpis?: true
    technicalSkills?: true
    toolsUsed?: true
    certifications?: true
    communication?: true
    analyticalAbility?: true
    leadership?: true
    negotiation?: true
    stakeholderManagement?: true
    attentionToDetail?: true
    personalityAnalytical?: true
    personalityCreative?: true
    personalityStructured?: true
    personalityRiskAppetite?: true
    personalityPeopleInteraction?: true
    personalityFieldWork?: true
    personalityPressureLevel?: true
    careerProgression?: true
    salaryProgression?: true
    years0_2_Title?: true
    years0_2_Salary?: true
    years3_5_Title?: true
    years3_5_Salary?: true
    years6_10_Title?: true
    years6_10_Salary?: true
    years10_plus_Title?: true
    years10_plus_Salary?: true
    avgEntrySalaryTier1?: true
    avgEntrySalaryTier2?: true
    growthSpeed?: true
    averageWorkHoursPerWeek?: true
    travelFrequency?: true
    weekendWorkLikelihood?: true
    stressLevel?: true
    growthTrend?: true
    automationRisk?: true
    futureRelevanceScore?: true
    top5Companies?: true
    suitsYouIf?: true
    avoidIf?: true
    switchability?: true
    brandValue?: true
    learningCurveDifficulty?: true
    entryBarrier?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    roleId: string
    name: string
    slug: string | null
    specialization: string
    sector: JsonValue | null
    roleLevel: string | null
    shortDescription: string | null
    whatThisRoleDoes: string | null
    whyCompaniesHire: string | null
    responsibilities: JsonValue | null
    kpis: JsonValue | null
    technicalSkills: JsonValue | null
    toolsUsed: JsonValue | null
    certifications: JsonValue | null
    communication: number | null
    analyticalAbility: number | null
    leadership: number | null
    negotiation: number | null
    stakeholderManagement: number | null
    attentionToDetail: number | null
    personalityAnalytical: number | null
    personalityCreative: number | null
    personalityStructured: number | null
    personalityRiskAppetite: number | null
    personalityPeopleInteraction: number | null
    personalityFieldWork: number | null
    personalityPressureLevel: number | null
    careerProgression: JsonValue | null
    salaryProgression: JsonValue | null
    years0_2_Title: string | null
    years0_2_Salary: string | null
    years3_5_Title: string | null
    years3_5_Salary: string | null
    years6_10_Title: string | null
    years6_10_Salary: string | null
    years10_plus_Title: string | null
    years10_plus_Salary: string | null
    avgEntrySalaryTier1: number | null
    avgEntrySalaryTier2: number | null
    growthSpeed: string | null
    averageWorkHoursPerWeek: string | null
    travelFrequency: $Enums.TravelFrequency | null
    weekendWorkLikelihood: string | null
    stressLevel: $Enums.StressLevel | null
    growthTrend: string | null
    automationRisk: string | null
    futureRelevanceScore: number | null
    top5Companies: JsonValue | null
    suitsYouIf: JsonValue | null
    avoidIf: JsonValue | null
    switchability: number | null
    brandValue: number | null
    learningCurveDifficulty: number | null
    entryBarrier: number | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    name?: boolean
    slug?: boolean
    specialization?: boolean
    sector?: boolean
    roleLevel?: boolean
    shortDescription?: boolean
    whatThisRoleDoes?: boolean
    whyCompaniesHire?: boolean
    responsibilities?: boolean
    kpis?: boolean
    technicalSkills?: boolean
    toolsUsed?: boolean
    certifications?: boolean
    communication?: boolean
    analyticalAbility?: boolean
    leadership?: boolean
    negotiation?: boolean
    stakeholderManagement?: boolean
    attentionToDetail?: boolean
    personalityAnalytical?: boolean
    personalityCreative?: boolean
    personalityStructured?: boolean
    personalityRiskAppetite?: boolean
    personalityPeopleInteraction?: boolean
    personalityFieldWork?: boolean
    personalityPressureLevel?: boolean
    careerProgression?: boolean
    salaryProgression?: boolean
    years0_2_Title?: boolean
    years0_2_Salary?: boolean
    years3_5_Title?: boolean
    years3_5_Salary?: boolean
    years6_10_Title?: boolean
    years6_10_Salary?: boolean
    years10_plus_Title?: boolean
    years10_plus_Salary?: boolean
    avgEntrySalaryTier1?: boolean
    avgEntrySalaryTier2?: boolean
    growthSpeed?: boolean
    averageWorkHoursPerWeek?: boolean
    travelFrequency?: boolean
    weekendWorkLikelihood?: boolean
    stressLevel?: boolean
    growthTrend?: boolean
    automationRisk?: boolean
    futureRelevanceScore?: boolean
    top5Companies?: boolean
    suitsYouIf?: boolean
    avoidIf?: boolean
    switchability?: boolean
    brandValue?: boolean
    learningCurveDifficulty?: boolean
    entryBarrier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    name?: boolean
    slug?: boolean
    specialization?: boolean
    sector?: boolean
    roleLevel?: boolean
    shortDescription?: boolean
    whatThisRoleDoes?: boolean
    whyCompaniesHire?: boolean
    responsibilities?: boolean
    kpis?: boolean
    technicalSkills?: boolean
    toolsUsed?: boolean
    certifications?: boolean
    communication?: boolean
    analyticalAbility?: boolean
    leadership?: boolean
    negotiation?: boolean
    stakeholderManagement?: boolean
    attentionToDetail?: boolean
    personalityAnalytical?: boolean
    personalityCreative?: boolean
    personalityStructured?: boolean
    personalityRiskAppetite?: boolean
    personalityPeopleInteraction?: boolean
    personalityFieldWork?: boolean
    personalityPressureLevel?: boolean
    careerProgression?: boolean
    salaryProgression?: boolean
    years0_2_Title?: boolean
    years0_2_Salary?: boolean
    years3_5_Title?: boolean
    years3_5_Salary?: boolean
    years6_10_Title?: boolean
    years6_10_Salary?: boolean
    years10_plus_Title?: boolean
    years10_plus_Salary?: boolean
    avgEntrySalaryTier1?: boolean
    avgEntrySalaryTier2?: boolean
    growthSpeed?: boolean
    averageWorkHoursPerWeek?: boolean
    travelFrequency?: boolean
    weekendWorkLikelihood?: boolean
    stressLevel?: boolean
    growthTrend?: boolean
    automationRisk?: boolean
    futureRelevanceScore?: boolean
    top5Companies?: boolean
    suitsYouIf?: boolean
    avoidIf?: boolean
    switchability?: boolean
    brandValue?: boolean
    learningCurveDifficulty?: boolean
    entryBarrier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    name?: boolean
    slug?: boolean
    specialization?: boolean
    sector?: boolean
    roleLevel?: boolean
    shortDescription?: boolean
    whatThisRoleDoes?: boolean
    whyCompaniesHire?: boolean
    responsibilities?: boolean
    kpis?: boolean
    technicalSkills?: boolean
    toolsUsed?: boolean
    certifications?: boolean
    communication?: boolean
    analyticalAbility?: boolean
    leadership?: boolean
    negotiation?: boolean
    stakeholderManagement?: boolean
    attentionToDetail?: boolean
    personalityAnalytical?: boolean
    personalityCreative?: boolean
    personalityStructured?: boolean
    personalityRiskAppetite?: boolean
    personalityPeopleInteraction?: boolean
    personalityFieldWork?: boolean
    personalityPressureLevel?: boolean
    careerProgression?: boolean
    salaryProgression?: boolean
    years0_2_Title?: boolean
    years0_2_Salary?: boolean
    years3_5_Title?: boolean
    years3_5_Salary?: boolean
    years6_10_Title?: boolean
    years6_10_Salary?: boolean
    years10_plus_Title?: boolean
    years10_plus_Salary?: boolean
    avgEntrySalaryTier1?: boolean
    avgEntrySalaryTier2?: boolean
    growthSpeed?: boolean
    averageWorkHoursPerWeek?: boolean
    travelFrequency?: boolean
    weekendWorkLikelihood?: boolean
    stressLevel?: boolean
    growthTrend?: boolean
    automationRisk?: boolean
    futureRelevanceScore?: boolean
    top5Companies?: boolean
    suitsYouIf?: boolean
    avoidIf?: boolean
    switchability?: boolean
    brandValue?: boolean
    learningCurveDifficulty?: boolean
    entryBarrier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    roleId?: boolean
    name?: boolean
    slug?: boolean
    specialization?: boolean
    sector?: boolean
    roleLevel?: boolean
    shortDescription?: boolean
    whatThisRoleDoes?: boolean
    whyCompaniesHire?: boolean
    responsibilities?: boolean
    kpis?: boolean
    technicalSkills?: boolean
    toolsUsed?: boolean
    certifications?: boolean
    communication?: boolean
    analyticalAbility?: boolean
    leadership?: boolean
    negotiation?: boolean
    stakeholderManagement?: boolean
    attentionToDetail?: boolean
    personalityAnalytical?: boolean
    personalityCreative?: boolean
    personalityStructured?: boolean
    personalityRiskAppetite?: boolean
    personalityPeopleInteraction?: boolean
    personalityFieldWork?: boolean
    personalityPressureLevel?: boolean
    careerProgression?: boolean
    salaryProgression?: boolean
    years0_2_Title?: boolean
    years0_2_Salary?: boolean
    years3_5_Title?: boolean
    years3_5_Salary?: boolean
    years6_10_Title?: boolean
    years6_10_Salary?: boolean
    years10_plus_Title?: boolean
    years10_plus_Salary?: boolean
    avgEntrySalaryTier1?: boolean
    avgEntrySalaryTier2?: boolean
    growthSpeed?: boolean
    averageWorkHoursPerWeek?: boolean
    travelFrequency?: boolean
    weekendWorkLikelihood?: boolean
    stressLevel?: boolean
    growthTrend?: boolean
    automationRisk?: boolean
    futureRelevanceScore?: boolean
    top5Companies?: boolean
    suitsYouIf?: boolean
    avoidIf?: boolean
    switchability?: boolean
    brandValue?: boolean
    learningCurveDifficulty?: boolean
    entryBarrier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "name" | "slug" | "specialization" | "sector" | "roleLevel" | "shortDescription" | "whatThisRoleDoes" | "whyCompaniesHire" | "responsibilities" | "kpis" | "technicalSkills" | "toolsUsed" | "certifications" | "communication" | "analyticalAbility" | "leadership" | "negotiation" | "stakeholderManagement" | "attentionToDetail" | "personalityAnalytical" | "personalityCreative" | "personalityStructured" | "personalityRiskAppetite" | "personalityPeopleInteraction" | "personalityFieldWork" | "personalityPressureLevel" | "careerProgression" | "salaryProgression" | "years0_2_Title" | "years0_2_Salary" | "years3_5_Title" | "years3_5_Salary" | "years6_10_Title" | "years6_10_Salary" | "years10_plus_Title" | "years10_plus_Salary" | "avgEntrySalaryTier1" | "avgEntrySalaryTier2" | "growthSpeed" | "averageWorkHoursPerWeek" | "travelFrequency" | "weekendWorkLikelihood" | "stressLevel" | "growthTrend" | "automationRisk" | "futureRelevanceScore" | "top5Companies" | "suitsYouIf" | "avoidIf" | "switchability" | "brandValue" | "learningCurveDifficulty" | "entryBarrier" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: string
      name: string
      slug: string | null
      specialization: string
      sector: Prisma.JsonValue | null
      roleLevel: string | null
      shortDescription: string | null
      whatThisRoleDoes: string | null
      whyCompaniesHire: string | null
      responsibilities: Prisma.JsonValue | null
      kpis: Prisma.JsonValue | null
      technicalSkills: Prisma.JsonValue | null
      toolsUsed: Prisma.JsonValue | null
      certifications: Prisma.JsonValue | null
      communication: number | null
      analyticalAbility: number | null
      leadership: number | null
      negotiation: number | null
      stakeholderManagement: number | null
      attentionToDetail: number | null
      personalityAnalytical: number | null
      personalityCreative: number | null
      personalityStructured: number | null
      personalityRiskAppetite: number | null
      personalityPeopleInteraction: number | null
      personalityFieldWork: number | null
      personalityPressureLevel: number | null
      careerProgression: Prisma.JsonValue | null
      salaryProgression: Prisma.JsonValue | null
      years0_2_Title: string | null
      years0_2_Salary: string | null
      years3_5_Title: string | null
      years3_5_Salary: string | null
      years6_10_Title: string | null
      years6_10_Salary: string | null
      years10_plus_Title: string | null
      years10_plus_Salary: string | null
      avgEntrySalaryTier1: number | null
      avgEntrySalaryTier2: number | null
      growthSpeed: string | null
      averageWorkHoursPerWeek: string | null
      travelFrequency: $Enums.TravelFrequency | null
      weekendWorkLikelihood: string | null
      stressLevel: $Enums.StressLevel | null
      growthTrend: string | null
      automationRisk: string | null
      futureRelevanceScore: number | null
      top5Companies: Prisma.JsonValue | null
      suitsYouIf: Prisma.JsonValue | null
      avoidIf: Prisma.JsonValue | null
      switchability: number | null
      brandValue: number | null
      learningCurveDifficulty: number | null
      entryBarrier: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly roleId: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly slug: FieldRef<"Role", 'String'>
    readonly specialization: FieldRef<"Role", 'String'>
    readonly sector: FieldRef<"Role", 'Json'>
    readonly roleLevel: FieldRef<"Role", 'String'>
    readonly shortDescription: FieldRef<"Role", 'String'>
    readonly whatThisRoleDoes: FieldRef<"Role", 'String'>
    readonly whyCompaniesHire: FieldRef<"Role", 'String'>
    readonly responsibilities: FieldRef<"Role", 'Json'>
    readonly kpis: FieldRef<"Role", 'Json'>
    readonly technicalSkills: FieldRef<"Role", 'Json'>
    readonly toolsUsed: FieldRef<"Role", 'Json'>
    readonly certifications: FieldRef<"Role", 'Json'>
    readonly communication: FieldRef<"Role", 'Int'>
    readonly analyticalAbility: FieldRef<"Role", 'Int'>
    readonly leadership: FieldRef<"Role", 'Int'>
    readonly negotiation: FieldRef<"Role", 'Int'>
    readonly stakeholderManagement: FieldRef<"Role", 'Int'>
    readonly attentionToDetail: FieldRef<"Role", 'Int'>
    readonly personalityAnalytical: FieldRef<"Role", 'Int'>
    readonly personalityCreative: FieldRef<"Role", 'Int'>
    readonly personalityStructured: FieldRef<"Role", 'Int'>
    readonly personalityRiskAppetite: FieldRef<"Role", 'Int'>
    readonly personalityPeopleInteraction: FieldRef<"Role", 'Int'>
    readonly personalityFieldWork: FieldRef<"Role", 'Int'>
    readonly personalityPressureLevel: FieldRef<"Role", 'Int'>
    readonly careerProgression: FieldRef<"Role", 'Json'>
    readonly salaryProgression: FieldRef<"Role", 'Json'>
    readonly years0_2_Title: FieldRef<"Role", 'String'>
    readonly years0_2_Salary: FieldRef<"Role", 'String'>
    readonly years3_5_Title: FieldRef<"Role", 'String'>
    readonly years3_5_Salary: FieldRef<"Role", 'String'>
    readonly years6_10_Title: FieldRef<"Role", 'String'>
    readonly years6_10_Salary: FieldRef<"Role", 'String'>
    readonly years10_plus_Title: FieldRef<"Role", 'String'>
    readonly years10_plus_Salary: FieldRef<"Role", 'String'>
    readonly avgEntrySalaryTier1: FieldRef<"Role", 'Float'>
    readonly avgEntrySalaryTier2: FieldRef<"Role", 'Float'>
    readonly growthSpeed: FieldRef<"Role", 'String'>
    readonly averageWorkHoursPerWeek: FieldRef<"Role", 'String'>
    readonly travelFrequency: FieldRef<"Role", 'TravelFrequency'>
    readonly weekendWorkLikelihood: FieldRef<"Role", 'String'>
    readonly stressLevel: FieldRef<"Role", 'StressLevel'>
    readonly growthTrend: FieldRef<"Role", 'String'>
    readonly automationRisk: FieldRef<"Role", 'String'>
    readonly futureRelevanceScore: FieldRef<"Role", 'Int'>
    readonly top5Companies: FieldRef<"Role", 'Json'>
    readonly suitsYouIf: FieldRef<"Role", 'Json'>
    readonly avoidIf: FieldRef<"Role", 'Json'>
    readonly switchability: FieldRef<"Role", 'Int'>
    readonly brandValue: FieldRef<"Role", 'Int'>
    readonly learningCurveDifficulty: FieldRef<"Role", 'Int'>
    readonly entryBarrier: FieldRef<"Role", 'Int'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    name: 'name',
    slug: 'slug',
    specialization: 'specialization',
    sector: 'sector',
    roleLevel: 'roleLevel',
    shortDescription: 'shortDescription',
    whatThisRoleDoes: 'whatThisRoleDoes',
    whyCompaniesHire: 'whyCompaniesHire',
    responsibilities: 'responsibilities',
    kpis: 'kpis',
    technicalSkills: 'technicalSkills',
    toolsUsed: 'toolsUsed',
    certifications: 'certifications',
    communication: 'communication',
    analyticalAbility: 'analyticalAbility',
    leadership: 'leadership',
    negotiation: 'negotiation',
    stakeholderManagement: 'stakeholderManagement',
    attentionToDetail: 'attentionToDetail',
    personalityAnalytical: 'personalityAnalytical',
    personalityCreative: 'personalityCreative',
    personalityStructured: 'personalityStructured',
    personalityRiskAppetite: 'personalityRiskAppetite',
    personalityPeopleInteraction: 'personalityPeopleInteraction',
    personalityFieldWork: 'personalityFieldWork',
    personalityPressureLevel: 'personalityPressureLevel',
    careerProgression: 'careerProgression',
    salaryProgression: 'salaryProgression',
    years0_2_Title: 'years0_2_Title',
    years0_2_Salary: 'years0_2_Salary',
    years3_5_Title: 'years3_5_Title',
    years3_5_Salary: 'years3_5_Salary',
    years6_10_Title: 'years6_10_Title',
    years6_10_Salary: 'years6_10_Salary',
    years10_plus_Title: 'years10_plus_Title',
    years10_plus_Salary: 'years10_plus_Salary',
    avgEntrySalaryTier1: 'avgEntrySalaryTier1',
    avgEntrySalaryTier2: 'avgEntrySalaryTier2',
    growthSpeed: 'growthSpeed',
    averageWorkHoursPerWeek: 'averageWorkHoursPerWeek',
    travelFrequency: 'travelFrequency',
    weekendWorkLikelihood: 'weekendWorkLikelihood',
    stressLevel: 'stressLevel',
    growthTrend: 'growthTrend',
    automationRisk: 'automationRisk',
    futureRelevanceScore: 'futureRelevanceScore',
    top5Companies: 'top5Companies',
    suitsYouIf: 'suitsYouIf',
    avoidIf: 'avoidIf',
    switchability: 'switchability',
    brandValue: 'brandValue',
    learningCurveDifficulty: 'learningCurveDifficulty',
    entryBarrier: 'entryBarrier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TravelFrequency'
   */
  export type EnumTravelFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelFrequency'>
    


  /**
   * Reference to a field of type 'TravelFrequency[]'
   */
  export type ListEnumTravelFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelFrequency[]'>
    


  /**
   * Reference to a field of type 'StressLevel'
   */
  export type EnumStressLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StressLevel'>
    


  /**
   * Reference to a field of type 'StressLevel[]'
   */
  export type ListEnumStressLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StressLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    roleId?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    slug?: StringNullableFilter<"Role"> | string | null
    specialization?: StringFilter<"Role"> | string
    sector?: JsonNullableFilter<"Role">
    roleLevel?: StringNullableFilter<"Role"> | string | null
    shortDescription?: StringNullableFilter<"Role"> | string | null
    whatThisRoleDoes?: StringNullableFilter<"Role"> | string | null
    whyCompaniesHire?: StringNullableFilter<"Role"> | string | null
    responsibilities?: JsonNullableFilter<"Role">
    kpis?: JsonNullableFilter<"Role">
    technicalSkills?: JsonNullableFilter<"Role">
    toolsUsed?: JsonNullableFilter<"Role">
    certifications?: JsonNullableFilter<"Role">
    communication?: IntNullableFilter<"Role"> | number | null
    analyticalAbility?: IntNullableFilter<"Role"> | number | null
    leadership?: IntNullableFilter<"Role"> | number | null
    negotiation?: IntNullableFilter<"Role"> | number | null
    stakeholderManagement?: IntNullableFilter<"Role"> | number | null
    attentionToDetail?: IntNullableFilter<"Role"> | number | null
    personalityAnalytical?: IntNullableFilter<"Role"> | number | null
    personalityCreative?: IntNullableFilter<"Role"> | number | null
    personalityStructured?: IntNullableFilter<"Role"> | number | null
    personalityRiskAppetite?: IntNullableFilter<"Role"> | number | null
    personalityPeopleInteraction?: IntNullableFilter<"Role"> | number | null
    personalityFieldWork?: IntNullableFilter<"Role"> | number | null
    personalityPressureLevel?: IntNullableFilter<"Role"> | number | null
    careerProgression?: JsonNullableFilter<"Role">
    salaryProgression?: JsonNullableFilter<"Role">
    years0_2_Title?: StringNullableFilter<"Role"> | string | null
    years0_2_Salary?: StringNullableFilter<"Role"> | string | null
    years3_5_Title?: StringNullableFilter<"Role"> | string | null
    years3_5_Salary?: StringNullableFilter<"Role"> | string | null
    years6_10_Title?: StringNullableFilter<"Role"> | string | null
    years6_10_Salary?: StringNullableFilter<"Role"> | string | null
    years10_plus_Title?: StringNullableFilter<"Role"> | string | null
    years10_plus_Salary?: StringNullableFilter<"Role"> | string | null
    avgEntrySalaryTier1?: FloatNullableFilter<"Role"> | number | null
    avgEntrySalaryTier2?: FloatNullableFilter<"Role"> | number | null
    growthSpeed?: StringNullableFilter<"Role"> | string | null
    averageWorkHoursPerWeek?: StringNullableFilter<"Role"> | string | null
    travelFrequency?: EnumTravelFrequencyNullableFilter<"Role"> | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: StringNullableFilter<"Role"> | string | null
    stressLevel?: EnumStressLevelNullableFilter<"Role"> | $Enums.StressLevel | null
    growthTrend?: StringNullableFilter<"Role"> | string | null
    automationRisk?: StringNullableFilter<"Role"> | string | null
    futureRelevanceScore?: IntNullableFilter<"Role"> | number | null
    top5Companies?: JsonNullableFilter<"Role">
    suitsYouIf?: JsonNullableFilter<"Role">
    avoidIf?: JsonNullableFilter<"Role">
    switchability?: IntNullableFilter<"Role"> | number | null
    brandValue?: IntNullableFilter<"Role"> | number | null
    learningCurveDifficulty?: IntNullableFilter<"Role"> | number | null
    entryBarrier?: IntNullableFilter<"Role"> | number | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    specialization?: SortOrder
    sector?: SortOrderInput | SortOrder
    roleLevel?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    whatThisRoleDoes?: SortOrderInput | SortOrder
    whyCompaniesHire?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    kpis?: SortOrderInput | SortOrder
    technicalSkills?: SortOrderInput | SortOrder
    toolsUsed?: SortOrderInput | SortOrder
    certifications?: SortOrderInput | SortOrder
    communication?: SortOrderInput | SortOrder
    analyticalAbility?: SortOrderInput | SortOrder
    leadership?: SortOrderInput | SortOrder
    negotiation?: SortOrderInput | SortOrder
    stakeholderManagement?: SortOrderInput | SortOrder
    attentionToDetail?: SortOrderInput | SortOrder
    personalityAnalytical?: SortOrderInput | SortOrder
    personalityCreative?: SortOrderInput | SortOrder
    personalityStructured?: SortOrderInput | SortOrder
    personalityRiskAppetite?: SortOrderInput | SortOrder
    personalityPeopleInteraction?: SortOrderInput | SortOrder
    personalityFieldWork?: SortOrderInput | SortOrder
    personalityPressureLevel?: SortOrderInput | SortOrder
    careerProgression?: SortOrderInput | SortOrder
    salaryProgression?: SortOrderInput | SortOrder
    years0_2_Title?: SortOrderInput | SortOrder
    years0_2_Salary?: SortOrderInput | SortOrder
    years3_5_Title?: SortOrderInput | SortOrder
    years3_5_Salary?: SortOrderInput | SortOrder
    years6_10_Title?: SortOrderInput | SortOrder
    years6_10_Salary?: SortOrderInput | SortOrder
    years10_plus_Title?: SortOrderInput | SortOrder
    years10_plus_Salary?: SortOrderInput | SortOrder
    avgEntrySalaryTier1?: SortOrderInput | SortOrder
    avgEntrySalaryTier2?: SortOrderInput | SortOrder
    growthSpeed?: SortOrderInput | SortOrder
    averageWorkHoursPerWeek?: SortOrderInput | SortOrder
    travelFrequency?: SortOrderInput | SortOrder
    weekendWorkLikelihood?: SortOrderInput | SortOrder
    stressLevel?: SortOrderInput | SortOrder
    growthTrend?: SortOrderInput | SortOrder
    automationRisk?: SortOrderInput | SortOrder
    futureRelevanceScore?: SortOrderInput | SortOrder
    top5Companies?: SortOrderInput | SortOrder
    suitsYouIf?: SortOrderInput | SortOrder
    avoidIf?: SortOrderInput | SortOrder
    switchability?: SortOrderInput | SortOrder
    brandValue?: SortOrderInput | SortOrder
    learningCurveDifficulty?: SortOrderInput | SortOrder
    entryBarrier?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roleId?: string
    slug?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    specialization?: StringFilter<"Role"> | string
    sector?: JsonNullableFilter<"Role">
    roleLevel?: StringNullableFilter<"Role"> | string | null
    shortDescription?: StringNullableFilter<"Role"> | string | null
    whatThisRoleDoes?: StringNullableFilter<"Role"> | string | null
    whyCompaniesHire?: StringNullableFilter<"Role"> | string | null
    responsibilities?: JsonNullableFilter<"Role">
    kpis?: JsonNullableFilter<"Role">
    technicalSkills?: JsonNullableFilter<"Role">
    toolsUsed?: JsonNullableFilter<"Role">
    certifications?: JsonNullableFilter<"Role">
    communication?: IntNullableFilter<"Role"> | number | null
    analyticalAbility?: IntNullableFilter<"Role"> | number | null
    leadership?: IntNullableFilter<"Role"> | number | null
    negotiation?: IntNullableFilter<"Role"> | number | null
    stakeholderManagement?: IntNullableFilter<"Role"> | number | null
    attentionToDetail?: IntNullableFilter<"Role"> | number | null
    personalityAnalytical?: IntNullableFilter<"Role"> | number | null
    personalityCreative?: IntNullableFilter<"Role"> | number | null
    personalityStructured?: IntNullableFilter<"Role"> | number | null
    personalityRiskAppetite?: IntNullableFilter<"Role"> | number | null
    personalityPeopleInteraction?: IntNullableFilter<"Role"> | number | null
    personalityFieldWork?: IntNullableFilter<"Role"> | number | null
    personalityPressureLevel?: IntNullableFilter<"Role"> | number | null
    careerProgression?: JsonNullableFilter<"Role">
    salaryProgression?: JsonNullableFilter<"Role">
    years0_2_Title?: StringNullableFilter<"Role"> | string | null
    years0_2_Salary?: StringNullableFilter<"Role"> | string | null
    years3_5_Title?: StringNullableFilter<"Role"> | string | null
    years3_5_Salary?: StringNullableFilter<"Role"> | string | null
    years6_10_Title?: StringNullableFilter<"Role"> | string | null
    years6_10_Salary?: StringNullableFilter<"Role"> | string | null
    years10_plus_Title?: StringNullableFilter<"Role"> | string | null
    years10_plus_Salary?: StringNullableFilter<"Role"> | string | null
    avgEntrySalaryTier1?: FloatNullableFilter<"Role"> | number | null
    avgEntrySalaryTier2?: FloatNullableFilter<"Role"> | number | null
    growthSpeed?: StringNullableFilter<"Role"> | string | null
    averageWorkHoursPerWeek?: StringNullableFilter<"Role"> | string | null
    travelFrequency?: EnumTravelFrequencyNullableFilter<"Role"> | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: StringNullableFilter<"Role"> | string | null
    stressLevel?: EnumStressLevelNullableFilter<"Role"> | $Enums.StressLevel | null
    growthTrend?: StringNullableFilter<"Role"> | string | null
    automationRisk?: StringNullableFilter<"Role"> | string | null
    futureRelevanceScore?: IntNullableFilter<"Role"> | number | null
    top5Companies?: JsonNullableFilter<"Role">
    suitsYouIf?: JsonNullableFilter<"Role">
    avoidIf?: JsonNullableFilter<"Role">
    switchability?: IntNullableFilter<"Role"> | number | null
    brandValue?: IntNullableFilter<"Role"> | number | null
    learningCurveDifficulty?: IntNullableFilter<"Role"> | number | null
    entryBarrier?: IntNullableFilter<"Role"> | number | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
  }, "id" | "roleId" | "slug">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    specialization?: SortOrder
    sector?: SortOrderInput | SortOrder
    roleLevel?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    whatThisRoleDoes?: SortOrderInput | SortOrder
    whyCompaniesHire?: SortOrderInput | SortOrder
    responsibilities?: SortOrderInput | SortOrder
    kpis?: SortOrderInput | SortOrder
    technicalSkills?: SortOrderInput | SortOrder
    toolsUsed?: SortOrderInput | SortOrder
    certifications?: SortOrderInput | SortOrder
    communication?: SortOrderInput | SortOrder
    analyticalAbility?: SortOrderInput | SortOrder
    leadership?: SortOrderInput | SortOrder
    negotiation?: SortOrderInput | SortOrder
    stakeholderManagement?: SortOrderInput | SortOrder
    attentionToDetail?: SortOrderInput | SortOrder
    personalityAnalytical?: SortOrderInput | SortOrder
    personalityCreative?: SortOrderInput | SortOrder
    personalityStructured?: SortOrderInput | SortOrder
    personalityRiskAppetite?: SortOrderInput | SortOrder
    personalityPeopleInteraction?: SortOrderInput | SortOrder
    personalityFieldWork?: SortOrderInput | SortOrder
    personalityPressureLevel?: SortOrderInput | SortOrder
    careerProgression?: SortOrderInput | SortOrder
    salaryProgression?: SortOrderInput | SortOrder
    years0_2_Title?: SortOrderInput | SortOrder
    years0_2_Salary?: SortOrderInput | SortOrder
    years3_5_Title?: SortOrderInput | SortOrder
    years3_5_Salary?: SortOrderInput | SortOrder
    years6_10_Title?: SortOrderInput | SortOrder
    years6_10_Salary?: SortOrderInput | SortOrder
    years10_plus_Title?: SortOrderInput | SortOrder
    years10_plus_Salary?: SortOrderInput | SortOrder
    avgEntrySalaryTier1?: SortOrderInput | SortOrder
    avgEntrySalaryTier2?: SortOrderInput | SortOrder
    growthSpeed?: SortOrderInput | SortOrder
    averageWorkHoursPerWeek?: SortOrderInput | SortOrder
    travelFrequency?: SortOrderInput | SortOrder
    weekendWorkLikelihood?: SortOrderInput | SortOrder
    stressLevel?: SortOrderInput | SortOrder
    growthTrend?: SortOrderInput | SortOrder
    automationRisk?: SortOrderInput | SortOrder
    futureRelevanceScore?: SortOrderInput | SortOrder
    top5Companies?: SortOrderInput | SortOrder
    suitsYouIf?: SortOrderInput | SortOrder
    avoidIf?: SortOrderInput | SortOrder
    switchability?: SortOrderInput | SortOrder
    brandValue?: SortOrderInput | SortOrder
    learningCurveDifficulty?: SortOrderInput | SortOrder
    entryBarrier?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    roleId?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    slug?: StringNullableWithAggregatesFilter<"Role"> | string | null
    specialization?: StringWithAggregatesFilter<"Role"> | string
    sector?: JsonNullableWithAggregatesFilter<"Role">
    roleLevel?: StringNullableWithAggregatesFilter<"Role"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Role"> | string | null
    whatThisRoleDoes?: StringNullableWithAggregatesFilter<"Role"> | string | null
    whyCompaniesHire?: StringNullableWithAggregatesFilter<"Role"> | string | null
    responsibilities?: JsonNullableWithAggregatesFilter<"Role">
    kpis?: JsonNullableWithAggregatesFilter<"Role">
    technicalSkills?: JsonNullableWithAggregatesFilter<"Role">
    toolsUsed?: JsonNullableWithAggregatesFilter<"Role">
    certifications?: JsonNullableWithAggregatesFilter<"Role">
    communication?: IntNullableWithAggregatesFilter<"Role"> | number | null
    analyticalAbility?: IntNullableWithAggregatesFilter<"Role"> | number | null
    leadership?: IntNullableWithAggregatesFilter<"Role"> | number | null
    negotiation?: IntNullableWithAggregatesFilter<"Role"> | number | null
    stakeholderManagement?: IntNullableWithAggregatesFilter<"Role"> | number | null
    attentionToDetail?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityAnalytical?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityCreative?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityStructured?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityRiskAppetite?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityPeopleInteraction?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityFieldWork?: IntNullableWithAggregatesFilter<"Role"> | number | null
    personalityPressureLevel?: IntNullableWithAggregatesFilter<"Role"> | number | null
    careerProgression?: JsonNullableWithAggregatesFilter<"Role">
    salaryProgression?: JsonNullableWithAggregatesFilter<"Role">
    years0_2_Title?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years0_2_Salary?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years3_5_Title?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years3_5_Salary?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years6_10_Title?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years6_10_Salary?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years10_plus_Title?: StringNullableWithAggregatesFilter<"Role"> | string | null
    years10_plus_Salary?: StringNullableWithAggregatesFilter<"Role"> | string | null
    avgEntrySalaryTier1?: FloatNullableWithAggregatesFilter<"Role"> | number | null
    avgEntrySalaryTier2?: FloatNullableWithAggregatesFilter<"Role"> | number | null
    growthSpeed?: StringNullableWithAggregatesFilter<"Role"> | string | null
    averageWorkHoursPerWeek?: StringNullableWithAggregatesFilter<"Role"> | string | null
    travelFrequency?: EnumTravelFrequencyNullableWithAggregatesFilter<"Role"> | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: StringNullableWithAggregatesFilter<"Role"> | string | null
    stressLevel?: EnumStressLevelNullableWithAggregatesFilter<"Role"> | $Enums.StressLevel | null
    growthTrend?: StringNullableWithAggregatesFilter<"Role"> | string | null
    automationRisk?: StringNullableWithAggregatesFilter<"Role"> | string | null
    futureRelevanceScore?: IntNullableWithAggregatesFilter<"Role"> | number | null
    top5Companies?: JsonNullableWithAggregatesFilter<"Role">
    suitsYouIf?: JsonNullableWithAggregatesFilter<"Role">
    avoidIf?: JsonNullableWithAggregatesFilter<"Role">
    switchability?: IntNullableWithAggregatesFilter<"Role"> | number | null
    brandValue?: IntNullableWithAggregatesFilter<"Role"> | number | null
    learningCurveDifficulty?: IntNullableWithAggregatesFilter<"Role"> | number | null
    entryBarrier?: IntNullableWithAggregatesFilter<"Role"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type RoleCreateInput = {
    roleId: string
    name: string
    slug?: string | null
    specialization: string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: string | null
    shortDescription?: string | null
    whatThisRoleDoes?: string | null
    whyCompaniesHire?: string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: number | null
    analyticalAbility?: number | null
    leadership?: number | null
    negotiation?: number | null
    stakeholderManagement?: number | null
    attentionToDetail?: number | null
    personalityAnalytical?: number | null
    personalityCreative?: number | null
    personalityStructured?: number | null
    personalityRiskAppetite?: number | null
    personalityPeopleInteraction?: number | null
    personalityFieldWork?: number | null
    personalityPressureLevel?: number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: string | null
    years0_2_Salary?: string | null
    years3_5_Title?: string | null
    years3_5_Salary?: string | null
    years6_10_Title?: string | null
    years6_10_Salary?: string | null
    years10_plus_Title?: string | null
    years10_plus_Salary?: string | null
    avgEntrySalaryTier1?: number | null
    avgEntrySalaryTier2?: number | null
    growthSpeed?: string | null
    averageWorkHoursPerWeek?: string | null
    travelFrequency?: $Enums.TravelFrequency | null
    weekendWorkLikelihood?: string | null
    stressLevel?: $Enums.StressLevel | null
    growthTrend?: string | null
    automationRisk?: string | null
    futureRelevanceScore?: number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: number | null
    brandValue?: number | null
    learningCurveDifficulty?: number | null
    entryBarrier?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    roleId: string
    name: string
    slug?: string | null
    specialization: string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: string | null
    shortDescription?: string | null
    whatThisRoleDoes?: string | null
    whyCompaniesHire?: string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: number | null
    analyticalAbility?: number | null
    leadership?: number | null
    negotiation?: number | null
    stakeholderManagement?: number | null
    attentionToDetail?: number | null
    personalityAnalytical?: number | null
    personalityCreative?: number | null
    personalityStructured?: number | null
    personalityRiskAppetite?: number | null
    personalityPeopleInteraction?: number | null
    personalityFieldWork?: number | null
    personalityPressureLevel?: number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: string | null
    years0_2_Salary?: string | null
    years3_5_Title?: string | null
    years3_5_Salary?: string | null
    years6_10_Title?: string | null
    years6_10_Salary?: string | null
    years10_plus_Title?: string | null
    years10_plus_Salary?: string | null
    avgEntrySalaryTier1?: number | null
    avgEntrySalaryTier2?: number | null
    growthSpeed?: string | null
    averageWorkHoursPerWeek?: string | null
    travelFrequency?: $Enums.TravelFrequency | null
    weekendWorkLikelihood?: string | null
    stressLevel?: $Enums.StressLevel | null
    growthTrend?: string | null
    automationRisk?: string | null
    futureRelevanceScore?: number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: number | null
    brandValue?: number | null
    learningCurveDifficulty?: number | null
    entryBarrier?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: StringFieldUpdateOperationsInput | string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatThisRoleDoes?: NullableStringFieldUpdateOperationsInput | string | null
    whyCompaniesHire?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: NullableIntFieldUpdateOperationsInput | number | null
    analyticalAbility?: NullableIntFieldUpdateOperationsInput | number | null
    leadership?: NullableIntFieldUpdateOperationsInput | number | null
    negotiation?: NullableIntFieldUpdateOperationsInput | number | null
    stakeholderManagement?: NullableIntFieldUpdateOperationsInput | number | null
    attentionToDetail?: NullableIntFieldUpdateOperationsInput | number | null
    personalityAnalytical?: NullableIntFieldUpdateOperationsInput | number | null
    personalityCreative?: NullableIntFieldUpdateOperationsInput | number | null
    personalityStructured?: NullableIntFieldUpdateOperationsInput | number | null
    personalityRiskAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPeopleInteraction?: NullableIntFieldUpdateOperationsInput | number | null
    personalityFieldWork?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPressureLevel?: NullableIntFieldUpdateOperationsInput | number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years0_2_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    avgEntrySalaryTier1?: NullableFloatFieldUpdateOperationsInput | number | null
    avgEntrySalaryTier2?: NullableFloatFieldUpdateOperationsInput | number | null
    growthSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    averageWorkHoursPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    travelFrequency?: NullableEnumTravelFrequencyFieldUpdateOperationsInput | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: NullableStringFieldUpdateOperationsInput | string | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    growthTrend?: NullableStringFieldUpdateOperationsInput | string | null
    automationRisk?: NullableStringFieldUpdateOperationsInput | string | null
    futureRelevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: NullableIntFieldUpdateOperationsInput | number | null
    brandValue?: NullableIntFieldUpdateOperationsInput | number | null
    learningCurveDifficulty?: NullableIntFieldUpdateOperationsInput | number | null
    entryBarrier?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: StringFieldUpdateOperationsInput | string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatThisRoleDoes?: NullableStringFieldUpdateOperationsInput | string | null
    whyCompaniesHire?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: NullableIntFieldUpdateOperationsInput | number | null
    analyticalAbility?: NullableIntFieldUpdateOperationsInput | number | null
    leadership?: NullableIntFieldUpdateOperationsInput | number | null
    negotiation?: NullableIntFieldUpdateOperationsInput | number | null
    stakeholderManagement?: NullableIntFieldUpdateOperationsInput | number | null
    attentionToDetail?: NullableIntFieldUpdateOperationsInput | number | null
    personalityAnalytical?: NullableIntFieldUpdateOperationsInput | number | null
    personalityCreative?: NullableIntFieldUpdateOperationsInput | number | null
    personalityStructured?: NullableIntFieldUpdateOperationsInput | number | null
    personalityRiskAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPeopleInteraction?: NullableIntFieldUpdateOperationsInput | number | null
    personalityFieldWork?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPressureLevel?: NullableIntFieldUpdateOperationsInput | number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years0_2_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    avgEntrySalaryTier1?: NullableFloatFieldUpdateOperationsInput | number | null
    avgEntrySalaryTier2?: NullableFloatFieldUpdateOperationsInput | number | null
    growthSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    averageWorkHoursPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    travelFrequency?: NullableEnumTravelFrequencyFieldUpdateOperationsInput | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: NullableStringFieldUpdateOperationsInput | string | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    growthTrend?: NullableStringFieldUpdateOperationsInput | string | null
    automationRisk?: NullableStringFieldUpdateOperationsInput | string | null
    futureRelevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: NullableIntFieldUpdateOperationsInput | number | null
    brandValue?: NullableIntFieldUpdateOperationsInput | number | null
    learningCurveDifficulty?: NullableIntFieldUpdateOperationsInput | number | null
    entryBarrier?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateManyInput = {
    id?: number
    roleId: string
    name: string
    slug?: string | null
    specialization: string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: string | null
    shortDescription?: string | null
    whatThisRoleDoes?: string | null
    whyCompaniesHire?: string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: number | null
    analyticalAbility?: number | null
    leadership?: number | null
    negotiation?: number | null
    stakeholderManagement?: number | null
    attentionToDetail?: number | null
    personalityAnalytical?: number | null
    personalityCreative?: number | null
    personalityStructured?: number | null
    personalityRiskAppetite?: number | null
    personalityPeopleInteraction?: number | null
    personalityFieldWork?: number | null
    personalityPressureLevel?: number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: string | null
    years0_2_Salary?: string | null
    years3_5_Title?: string | null
    years3_5_Salary?: string | null
    years6_10_Title?: string | null
    years6_10_Salary?: string | null
    years10_plus_Title?: string | null
    years10_plus_Salary?: string | null
    avgEntrySalaryTier1?: number | null
    avgEntrySalaryTier2?: number | null
    growthSpeed?: string | null
    averageWorkHoursPerWeek?: string | null
    travelFrequency?: $Enums.TravelFrequency | null
    weekendWorkLikelihood?: string | null
    stressLevel?: $Enums.StressLevel | null
    growthTrend?: string | null
    automationRisk?: string | null
    futureRelevanceScore?: number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: number | null
    brandValue?: number | null
    learningCurveDifficulty?: number | null
    entryBarrier?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: StringFieldUpdateOperationsInput | string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatThisRoleDoes?: NullableStringFieldUpdateOperationsInput | string | null
    whyCompaniesHire?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: NullableIntFieldUpdateOperationsInput | number | null
    analyticalAbility?: NullableIntFieldUpdateOperationsInput | number | null
    leadership?: NullableIntFieldUpdateOperationsInput | number | null
    negotiation?: NullableIntFieldUpdateOperationsInput | number | null
    stakeholderManagement?: NullableIntFieldUpdateOperationsInput | number | null
    attentionToDetail?: NullableIntFieldUpdateOperationsInput | number | null
    personalityAnalytical?: NullableIntFieldUpdateOperationsInput | number | null
    personalityCreative?: NullableIntFieldUpdateOperationsInput | number | null
    personalityStructured?: NullableIntFieldUpdateOperationsInput | number | null
    personalityRiskAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPeopleInteraction?: NullableIntFieldUpdateOperationsInput | number | null
    personalityFieldWork?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPressureLevel?: NullableIntFieldUpdateOperationsInput | number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years0_2_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    avgEntrySalaryTier1?: NullableFloatFieldUpdateOperationsInput | number | null
    avgEntrySalaryTier2?: NullableFloatFieldUpdateOperationsInput | number | null
    growthSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    averageWorkHoursPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    travelFrequency?: NullableEnumTravelFrequencyFieldUpdateOperationsInput | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: NullableStringFieldUpdateOperationsInput | string | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    growthTrend?: NullableStringFieldUpdateOperationsInput | string | null
    automationRisk?: NullableStringFieldUpdateOperationsInput | string | null
    futureRelevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: NullableIntFieldUpdateOperationsInput | number | null
    brandValue?: NullableIntFieldUpdateOperationsInput | number | null
    learningCurveDifficulty?: NullableIntFieldUpdateOperationsInput | number | null
    entryBarrier?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: StringFieldUpdateOperationsInput | string
    sector?: NullableJsonNullValueInput | InputJsonValue
    roleLevel?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatThisRoleDoes?: NullableStringFieldUpdateOperationsInput | string | null
    whyCompaniesHire?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableJsonNullValueInput | InputJsonValue
    kpis?: NullableJsonNullValueInput | InputJsonValue
    technicalSkills?: NullableJsonNullValueInput | InputJsonValue
    toolsUsed?: NullableJsonNullValueInput | InputJsonValue
    certifications?: NullableJsonNullValueInput | InputJsonValue
    communication?: NullableIntFieldUpdateOperationsInput | number | null
    analyticalAbility?: NullableIntFieldUpdateOperationsInput | number | null
    leadership?: NullableIntFieldUpdateOperationsInput | number | null
    negotiation?: NullableIntFieldUpdateOperationsInput | number | null
    stakeholderManagement?: NullableIntFieldUpdateOperationsInput | number | null
    attentionToDetail?: NullableIntFieldUpdateOperationsInput | number | null
    personalityAnalytical?: NullableIntFieldUpdateOperationsInput | number | null
    personalityCreative?: NullableIntFieldUpdateOperationsInput | number | null
    personalityStructured?: NullableIntFieldUpdateOperationsInput | number | null
    personalityRiskAppetite?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPeopleInteraction?: NullableIntFieldUpdateOperationsInput | number | null
    personalityFieldWork?: NullableIntFieldUpdateOperationsInput | number | null
    personalityPressureLevel?: NullableIntFieldUpdateOperationsInput | number | null
    careerProgression?: NullableJsonNullValueInput | InputJsonValue
    salaryProgression?: NullableJsonNullValueInput | InputJsonValue
    years0_2_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years0_2_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years3_5_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years6_10_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Title?: NullableStringFieldUpdateOperationsInput | string | null
    years10_plus_Salary?: NullableStringFieldUpdateOperationsInput | string | null
    avgEntrySalaryTier1?: NullableFloatFieldUpdateOperationsInput | number | null
    avgEntrySalaryTier2?: NullableFloatFieldUpdateOperationsInput | number | null
    growthSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    averageWorkHoursPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    travelFrequency?: NullableEnumTravelFrequencyFieldUpdateOperationsInput | $Enums.TravelFrequency | null
    weekendWorkLikelihood?: NullableStringFieldUpdateOperationsInput | string | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    growthTrend?: NullableStringFieldUpdateOperationsInput | string | null
    automationRisk?: NullableStringFieldUpdateOperationsInput | string | null
    futureRelevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    top5Companies?: NullableJsonNullValueInput | InputJsonValue
    suitsYouIf?: NullableJsonNullValueInput | InputJsonValue
    avoidIf?: NullableJsonNullValueInput | InputJsonValue
    switchability?: NullableIntFieldUpdateOperationsInput | number | null
    brandValue?: NullableIntFieldUpdateOperationsInput | number | null
    learningCurveDifficulty?: NullableIntFieldUpdateOperationsInput | number | null
    entryBarrier?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTravelFrequencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelFrequency | EnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTravelFrequencyNullableFilter<$PrismaModel> | $Enums.TravelFrequency | null
  }

  export type EnumStressLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableFilter<$PrismaModel> | $Enums.StressLevel | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    specialization?: SortOrder
    sector?: SortOrder
    roleLevel?: SortOrder
    shortDescription?: SortOrder
    whatThisRoleDoes?: SortOrder
    whyCompaniesHire?: SortOrder
    responsibilities?: SortOrder
    kpis?: SortOrder
    technicalSkills?: SortOrder
    toolsUsed?: SortOrder
    certifications?: SortOrder
    communication?: SortOrder
    analyticalAbility?: SortOrder
    leadership?: SortOrder
    negotiation?: SortOrder
    stakeholderManagement?: SortOrder
    attentionToDetail?: SortOrder
    personalityAnalytical?: SortOrder
    personalityCreative?: SortOrder
    personalityStructured?: SortOrder
    personalityRiskAppetite?: SortOrder
    personalityPeopleInteraction?: SortOrder
    personalityFieldWork?: SortOrder
    personalityPressureLevel?: SortOrder
    careerProgression?: SortOrder
    salaryProgression?: SortOrder
    years0_2_Title?: SortOrder
    years0_2_Salary?: SortOrder
    years3_5_Title?: SortOrder
    years3_5_Salary?: SortOrder
    years6_10_Title?: SortOrder
    years6_10_Salary?: SortOrder
    years10_plus_Title?: SortOrder
    years10_plus_Salary?: SortOrder
    avgEntrySalaryTier1?: SortOrder
    avgEntrySalaryTier2?: SortOrder
    growthSpeed?: SortOrder
    averageWorkHoursPerWeek?: SortOrder
    travelFrequency?: SortOrder
    weekendWorkLikelihood?: SortOrder
    stressLevel?: SortOrder
    growthTrend?: SortOrder
    automationRisk?: SortOrder
    futureRelevanceScore?: SortOrder
    top5Companies?: SortOrder
    suitsYouIf?: SortOrder
    avoidIf?: SortOrder
    switchability?: SortOrder
    brandValue?: SortOrder
    learningCurveDifficulty?: SortOrder
    entryBarrier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    communication?: SortOrder
    analyticalAbility?: SortOrder
    leadership?: SortOrder
    negotiation?: SortOrder
    stakeholderManagement?: SortOrder
    attentionToDetail?: SortOrder
    personalityAnalytical?: SortOrder
    personalityCreative?: SortOrder
    personalityStructured?: SortOrder
    personalityRiskAppetite?: SortOrder
    personalityPeopleInteraction?: SortOrder
    personalityFieldWork?: SortOrder
    personalityPressureLevel?: SortOrder
    avgEntrySalaryTier1?: SortOrder
    avgEntrySalaryTier2?: SortOrder
    futureRelevanceScore?: SortOrder
    switchability?: SortOrder
    brandValue?: SortOrder
    learningCurveDifficulty?: SortOrder
    entryBarrier?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    specialization?: SortOrder
    roleLevel?: SortOrder
    shortDescription?: SortOrder
    whatThisRoleDoes?: SortOrder
    whyCompaniesHire?: SortOrder
    communication?: SortOrder
    analyticalAbility?: SortOrder
    leadership?: SortOrder
    negotiation?: SortOrder
    stakeholderManagement?: SortOrder
    attentionToDetail?: SortOrder
    personalityAnalytical?: SortOrder
    personalityCreative?: SortOrder
    personalityStructured?: SortOrder
    personalityRiskAppetite?: SortOrder
    personalityPeopleInteraction?: SortOrder
    personalityFieldWork?: SortOrder
    personalityPressureLevel?: SortOrder
    years0_2_Title?: SortOrder
    years0_2_Salary?: SortOrder
    years3_5_Title?: SortOrder
    years3_5_Salary?: SortOrder
    years6_10_Title?: SortOrder
    years6_10_Salary?: SortOrder
    years10_plus_Title?: SortOrder
    years10_plus_Salary?: SortOrder
    avgEntrySalaryTier1?: SortOrder
    avgEntrySalaryTier2?: SortOrder
    growthSpeed?: SortOrder
    averageWorkHoursPerWeek?: SortOrder
    travelFrequency?: SortOrder
    weekendWorkLikelihood?: SortOrder
    stressLevel?: SortOrder
    growthTrend?: SortOrder
    automationRisk?: SortOrder
    futureRelevanceScore?: SortOrder
    switchability?: SortOrder
    brandValue?: SortOrder
    learningCurveDifficulty?: SortOrder
    entryBarrier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    specialization?: SortOrder
    roleLevel?: SortOrder
    shortDescription?: SortOrder
    whatThisRoleDoes?: SortOrder
    whyCompaniesHire?: SortOrder
    communication?: SortOrder
    analyticalAbility?: SortOrder
    leadership?: SortOrder
    negotiation?: SortOrder
    stakeholderManagement?: SortOrder
    attentionToDetail?: SortOrder
    personalityAnalytical?: SortOrder
    personalityCreative?: SortOrder
    personalityStructured?: SortOrder
    personalityRiskAppetite?: SortOrder
    personalityPeopleInteraction?: SortOrder
    personalityFieldWork?: SortOrder
    personalityPressureLevel?: SortOrder
    years0_2_Title?: SortOrder
    years0_2_Salary?: SortOrder
    years3_5_Title?: SortOrder
    years3_5_Salary?: SortOrder
    years6_10_Title?: SortOrder
    years6_10_Salary?: SortOrder
    years10_plus_Title?: SortOrder
    years10_plus_Salary?: SortOrder
    avgEntrySalaryTier1?: SortOrder
    avgEntrySalaryTier2?: SortOrder
    growthSpeed?: SortOrder
    averageWorkHoursPerWeek?: SortOrder
    travelFrequency?: SortOrder
    weekendWorkLikelihood?: SortOrder
    stressLevel?: SortOrder
    growthTrend?: SortOrder
    automationRisk?: SortOrder
    futureRelevanceScore?: SortOrder
    switchability?: SortOrder
    brandValue?: SortOrder
    learningCurveDifficulty?: SortOrder
    entryBarrier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    communication?: SortOrder
    analyticalAbility?: SortOrder
    leadership?: SortOrder
    negotiation?: SortOrder
    stakeholderManagement?: SortOrder
    attentionToDetail?: SortOrder
    personalityAnalytical?: SortOrder
    personalityCreative?: SortOrder
    personalityStructured?: SortOrder
    personalityRiskAppetite?: SortOrder
    personalityPeopleInteraction?: SortOrder
    personalityFieldWork?: SortOrder
    personalityPressureLevel?: SortOrder
    avgEntrySalaryTier1?: SortOrder
    avgEntrySalaryTier2?: SortOrder
    futureRelevanceScore?: SortOrder
    switchability?: SortOrder
    brandValue?: SortOrder
    learningCurveDifficulty?: SortOrder
    entryBarrier?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTravelFrequencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelFrequency | EnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTravelFrequencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.TravelFrequency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTravelFrequencyNullableFilter<$PrismaModel>
    _max?: NestedEnumTravelFrequencyNullableFilter<$PrismaModel>
  }

  export type EnumStressLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.StressLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStressLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumStressLevelNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumTravelFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.TravelFrequency | null
  }

  export type NullableEnumStressLevelFieldUpdateOperationsInput = {
    set?: $Enums.StressLevel | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTravelFrequencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelFrequency | EnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTravelFrequencyNullableFilter<$PrismaModel> | $Enums.TravelFrequency | null
  }

  export type NestedEnumStressLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableFilter<$PrismaModel> | $Enums.StressLevel | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTravelFrequencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelFrequency | EnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TravelFrequency[] | ListEnumTravelFrequencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTravelFrequencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.TravelFrequency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTravelFrequencyNullableFilter<$PrismaModel>
    _max?: NestedEnumTravelFrequencyNullableFilter<$PrismaModel>
  }

  export type NestedEnumStressLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.StressLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStressLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumStressLevelNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}